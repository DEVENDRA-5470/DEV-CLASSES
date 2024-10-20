from django.urls import path
from all_apps.users.views import *
urlpatterns = [
    path('',home,name="home"),
    path('register/',register,name="register"),
    path('sign_up/',sign_up,name="sign_up"),
    path('login_page/',login_page,name="login_page"),
    path('user_login/',user_login,name="user_login"),
    path('user_logout/',user_logout,name="user_logout")
    
]
