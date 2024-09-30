from django.urls import path
from .views import *
urlpatterns = [
    path('',Create_view.as_view(),name="create_view"),
    path('list/',List_view.as_view(),name="list_view"),
    path('<pk>/delete/',Delete_view.as_view(),name="Delete_View"),
    path('<pk>/Update_view/',Update_view.as_view(),name="Update_view"),
]
