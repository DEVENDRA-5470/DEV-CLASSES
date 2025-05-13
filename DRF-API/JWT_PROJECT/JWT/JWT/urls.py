"""
URL configuration for JWT project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from jwt_app.api.views import *
from rest_framework_simplejwt.views import (TokenBlacklistView,TokenObtainPairView,TokenRefreshView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('show_notes/',Show_notes.as_view(),name="show_notes"),
    path('token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('token/logout/',TokenBlacklistView.as_view(),name='token_blacklist'),

]
