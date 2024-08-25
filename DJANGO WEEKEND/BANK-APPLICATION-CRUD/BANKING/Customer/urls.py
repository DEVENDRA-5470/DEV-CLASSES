from django.urls import path
from Customer.views import *
urlpatterns = [
    path('',home,name="home"),
    path('delete_view/<int:id>',delete_view,name="delete"),
    path('deposite/<int:id>/',deposite_amount,name="deposite"),
    path('withdraw/<int:id>/',withdraw_amount,name="withdraw")
]
