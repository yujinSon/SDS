from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Youtube
from django.http import HttpResponse
from .serializer import CommentSerializer, youtubeListSerializer
from django.http import JsonResponse
from django.core import serializers
from rest_framework.response import Response

# Create your views here.
@api_view(['PUT','GET'])
def youtubeCrawling(request):
    if request.method == 'GET': # 유물을 시간에 따라서 Update 한다.
        youtube_data = Youtube.objects.all()
        print(len(youtube_data))
        print(youtube_data)
        comment = {}
        for i in youtube_data:
            comment[i.comment] = i.id
        print(comment)
        seralizer = youtubeListSerializer(youtube_data, many=True)
        return Response(seralizer.data)
        # 이 밑에 word Tokenzing을 실행한다.
        
        # 이 밑에 word Tokenizing 알고리즘을 진행한다.
        
        # 이 밑에 [("word", 10), ...]과 같은 형태로 나타낸다.
        
        # serializer = serializers.serialize("json", comment)
        # print(serializer)
        # return JsonResponse({'queryset_json': serializer})
    return HttpResponse("Hi")