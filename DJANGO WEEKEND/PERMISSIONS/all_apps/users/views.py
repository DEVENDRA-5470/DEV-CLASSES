from django.shortcuts import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
# Create your views here.
def home(request):
    return render (request,'home.html')

def register(request):
    return render(request,'register.html')

def sign_up(request):
    if request.method=="POST":
        username=request.POST.get('username')
        fullname=request.POST.get('fullname')
        email=request.POST.get('email')
        pass1=request.POST.get('password')
        pass2=request.POST.get('confirm-password')
        user=User.objects.create_user(username=username,
                                      first_name=fullname,
                                      email=email,
                                      password=pass2
                                      )
        user.save()
        auth=authenticate(username=username,password=pass2)
        if auth is not None:
            login(request,auth)
            return redirect('home')