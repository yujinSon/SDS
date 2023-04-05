from django.db import models
from django.utils.timezone import now
from datetime import datetime

# Create your models here.
class Youtube(models.Model):
    id = models.BigAutoField(primary_key=True)
    comment = models.CharField(max_length=10000, blank=True, null=True)
    author = models.CharField(max_length=100, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    likes = models.IntegerField(blank=True, null=True)
    subject = models.CharField(max_length=20, null=True)
    register = models.DateTimeField(auto_now_add=True, null=True)

class Artifact(models.Model):
    id = models.BigAutoField(primary_key=True)
    is_range = models.TextField()  # This field type is a guess.
    name = models.CharField(max_length=255, blank=True, null=True)
    stat = models.CharField(max_length=255, blank=True, null=True)
    target_class = models.CharField(max_length=255, blank=True, null=True)
    value = models.IntegerField()

class WordTokenizing(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    value = models.IntegerField()
    subject = models.CharField(max_length=255, blank=True, null=True)