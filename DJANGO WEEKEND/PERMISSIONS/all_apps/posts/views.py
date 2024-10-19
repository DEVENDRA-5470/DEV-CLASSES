from django.shortcuts import render
from all_apps.posts.models import *

# Create your views here.
def all_posts(request):
    posts=Posts.objects.all()
    context={'posts':posts}
    return render(request,'all_posts.html',context)