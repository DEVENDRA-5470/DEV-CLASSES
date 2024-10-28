from .models import Profile
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
        

def login_page(request):
    return render(request,'login.html')

def user_login(request):
    if request.method=="POST":
        username=request.POST.get('username')
        password=request.POST.get('password')
        print(username,password)
        user=authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            return redirect('all_posts')
        else:
            return HttpResponse("Something went wrong")
        

def user_logout(request):
    logout(request)
    return redirect ('login_page')


def user_profile(request):
    profile=Profile.objects.get(user=request.user)
    context={'profile':profile}
    return render(request,'profile.html',context)