from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Youtube
from django.http import HttpResponse
from .serializer import CommentSerializer, youtubeListSerializer
from django.http import JsonResponse
from django.core import serializers
from rest_framework.response import Response
import datetime

import pandas as pd
from googleapiclient.discovery import build
# from sqlalchemy import create_engine
import numpy as np
import re
from emoji import core
from pykospacing import Spacing
from konlpy.tag import Komoran

# Create your views here.
@api_view(['PUT','GET'])
def wordtoken(request):
    if request.method == 'GET': # 유물을 시간에 따라서 Update 한다.
        subject = ['환경', '안보', '질병', '사회', '범죄', '인구', '경제']
        comment = {'환경': [], '안보': [], '질병': [], '사회': [], '범죄': [], '인구': [], '경제': []}
        spacing = Spacing()
        for sub in subject:
            youtube_data = Youtube.subject(sub)
            print(len(youtube_data))
            print(youtube_data)
            # comment = {1: []}

            check = []
            # 띄어쓰기 보정
            for data in youtube_data:
                # comment[1].append({"word": data.comment, "value": data.id})

                # 띄어쓰기 보정
                kospacing_sent = spacing(data.comment) # str 이어야함
                print(kospacing_sent)  # str
                # print("띄어쓰기 끝!")

                check.append(kospacing_sent)

            # 형태소 분석
            komoran = Komoran()
            map_noun = {}
            for row in check:
                output = komoran.nouns(row)
                for out in output:
                    if out in map_noun:
                        map_noun[out] += 1
                    else:
                        map_noun[out] = 1
            # 많은 데이터 순으로 정렬
            sorted_map_noun = sorted(map_noun.items(), key=lambda item: item[1], reverse=True)
            comment[sub].append(sorted_map_noun)
            # comment[1].append({"word" : "asdjadj", "value":10})

            # seralizer = youtubeListSerializer(youtube_data, many=True)
            # 이 밑에 word Tokenzing을 실행한다.

            # 이 밑에 word Tokenizing 알고리즘을 진행한다.

            # 이 밑에 [("word", 10), ...]과 같은 형태로 나타낸다. List형태로 담아서 내보낼 것.
        
        return Response(comment)
    # return Response(comment)


# 크롤링 코드
def crawling():
    def remove(raw):
        sentence = re.sub('((<([^>]+)>)|(@[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+)|(\w+:\/\/\S+))', '', raw)
        return sentence

    # youtube crawling
    # api_key = 'AIzaSyA4k9e22aOJ2HvTThbGDHbTA7wv3iaoNZ8' # 본인 키
    api_key = ''
    # video_id = 'GVpfYJjDrC8' # 영상 키
    video_id = ''

    comments = list()
    api_obj = build('youtube', 'v3', developerKey=api_key)
    response = api_obj.commentThreads().list(part='snippet,replies', videoId=video_id, maxResults=100).execute()

    while response:
        for item in response['items']:
            comment = item['snippet']['topLevelComment']['snippet']
            comments.append(
                [comment['textDisplay'], comment['authorDisplayName'], comment['publishedAt'], comment['likeCount']])

            if item['snippet']['totalReplyCount'] > 0:
                for reply_item in item['replies']['comments']:
                    reply = reply_item['snippet']
                    comments.append(
                        [reply['textDisplay'], reply['authorDisplayName'], reply['publishedAt'], reply['likeCount']])

        if 'nextPageToken' in response:
            response = api_obj.commentThreads().list(part='snippet,replies', videoId=video_id,
                                                     pageToken=response['nextPageToken'], maxResults=100).execute()

        else:
            break

    # dataframe
    df = pd.DataFrame(comments, columns=['comment', 'author', 'date', 'likes'])
    # print(df)

    # date 형식으로 바꿔주기
    modify = []
    for i in df['date']:
        arr = i.split('T')
        modify.append(arr[0] + " " + arr[1].split('Z')[0])
    # date 수정
    df['date'] = modify
    # print(df['date'])

    modify = []
    for raw in df['comment']:
        # remove html, tag, link
        arr = remove(raw)

        # 이모지 삭제
        arr = core.replace_emoji(arr, "")

        # 10000자 이내 자르기
        if len(arr) > 10000:
            arr = arr[:10000]

        # 빈 칸이라면 넘기기
        # if arr == "":
        #     df.drop(index, axis=0, inplace=True)
        #     continue

        modify.append(arr)
    df['comment'] = modify
    # 빈칸이면 삭제
    idx = df[df['comment'].isnull()].index
    # print(idx)
    df.drop(idx, inplace=True)
    # print(df)

    # subject 컬럼 삽입
    subject = ['환경', '안보', '질병', '사회', '범죄', '인구', '경제']
    sample = np.full((df['comment'].size, 1), '환경')
    # print(sample)
    df1 = pd.DataFrame(sample, columns=['subject'])
    # print(df1)
    # 합치기
    result = pd.concat([df, df1], axis=1)

    # 크롤링한 날짜
    sample2 = np.full((df['comment'].size, 1), datetime.datetime.now())
    df2 = pd.DataFrame(sample2, columns=['register'])
    result = pd.concat([result, df2], axis=1)

    print(result)

    # 저장
    Youtube.save(result)

    # 저장
    # db_connection_str = 'mysql+pymysql://root:qudwlsgoa@j8A303.p.ssafy.io:3308/youtube'
    # db_connection = create_engine(db_connection_str, encoding='utf8')
    # conn = db_connection.connect()
    #
    # result.to_sql(name='youtube_youtube', con=db_connection, if_exists='append', index=False)