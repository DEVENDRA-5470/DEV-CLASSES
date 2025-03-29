from django.urls import path
from .views import *
urlpatterns = [
    path("all-task/",all_task),
    path("task/<int:pk>/",task)
]
