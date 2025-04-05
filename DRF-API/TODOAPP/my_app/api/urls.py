from django.urls import path
from my_app.api.views import *
urlpatterns = [
    # path("",all_task),
    # path("task/<int:pk>/",task),
    # path("delete_task/<int:pk>/",delete_task),
    # path("update_task/<int:pk>/",partial_update),
    # path("full_update/<int:pk>/",full_update),
    # path("create_data/",create_data),

    # class based view
    path("all-task/",All_task.as_view()),
    path("get-task/<int:pk>",get_task.as_view()),
    path("delete-task/<int:pk>",delete_task.as_view()),
    path("create-task/",create_task.as_view()),
    path("update-task/<int:pk>",update_task.as_view()),
    path("all-action/<int:pk>",all_action.as_view()),
    
]
