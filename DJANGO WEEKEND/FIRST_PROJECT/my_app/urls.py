from django.urls  import path
from my_app.views import *
urlpatterns=[
    path("",student,name=""),
    path("home",home,name="home"),
    path("about",about,name="about"),
]