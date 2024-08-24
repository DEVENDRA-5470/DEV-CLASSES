from django.urls import path
from Customer.views import *
urlpatterns = [
    path('',home,name="home")
]
