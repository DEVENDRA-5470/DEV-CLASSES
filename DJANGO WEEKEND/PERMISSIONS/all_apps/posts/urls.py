from django.urls import path
from all_apps.posts.views import *
urlpatterns = [
    path('',all_posts,name="all_posts")
]
