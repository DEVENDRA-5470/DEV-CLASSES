from django.urls import path
from users.views import *
urlpatterns = [
    path('',home_view,name="home"),
    path('sign-up',signup_view,name="sign-up"),
]
