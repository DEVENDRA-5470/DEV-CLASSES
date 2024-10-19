from django.urls import path
from all_apps.users.views import *
urlpatterns = [
    path('',home,name="home"),
    path('register/',register,name="register"),
    path('sign_up/',sign_up,name="sign_up")
    
]
