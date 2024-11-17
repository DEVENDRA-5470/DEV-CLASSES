from django.urls import path,include
from rest_framework import routers
from .views import *
router = routers.DefaultRouter()
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('all_accounts/',all_accounts,name="all_accounts"),
    path('all_accounts/<int:id>/',all_accounts,name="all_accounts"),
    path('update_account/<str:cus_ac_no>/',update_account,name="update_account"),
    path('create_account/',create_account,name="create_accounte"),
    path('delete_account/<int:id>/',delete_account,name="delete_accounte"),
]