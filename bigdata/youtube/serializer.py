from rest_framework import serializers
from .models import Youtube

class CommentSerializer(serializers.Serializer):
    # title = serializers.CharField()
    content = serializers.CharField()
    
class youtubeListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Youtube
        fields = '__all__'
        # fields = ('id', 'title', 'content', 'user', 'username')