from django.urls  import path
from my_app.views import *
urlpatterns=[
    path("",home,name="home"),
    path("about",about,name="about"),
]