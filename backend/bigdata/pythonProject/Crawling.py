import pandas
from googleapiclient.discovery import build

api_key = 'AIzaSyA4k9e22aOJ2HvTThbGDHbTA7wv3iaoNZ8'
video_id = 'laAT1fdxIT0'
"""
https://www.youtube.com/watch?v=laAT1fdxIT0
출산율 걱정 말라는 정부?...90년대생들은 '어리둥절' / SBS / 뉴블더
"""

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

df = pandas.DataFrame(comments)
df.to_csv('results.csv', header=['comment', 'author', 'date', 'num_likes'], index=None)