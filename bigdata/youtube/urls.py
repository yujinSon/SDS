from django.urls import path
from . import views


urlpatterns = [
    path('crawling', views.youtubeCrawling),
    path('wordtoken', views.wordtoken),
]
