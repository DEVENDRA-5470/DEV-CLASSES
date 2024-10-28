from django.urls import path,include
from rest_framework import routers
from .views import all_accounts
router = routers.DefaultRouter()
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('all_accounts/',all_accounts,name="all_accounts")
]