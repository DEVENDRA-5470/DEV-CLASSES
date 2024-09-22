from django.shortcuts import *
from django.contrib.auth.models import User

# Create your views here.
def home_view(request):
    return render (request,"home.html")

def signup_view(request):
    if request.method=="POST":
        user_name=request.POST.get('username')
        user_email=request.POST.get('email')
        user_first=request.POST.get('first-name')
        user_last=request.POST.get('last-name')
        user_pass1=request.POST.get('password')
        user_pass2=request.POST.get('confirm-password')
        print(user_name,user_email,user_first,user_last,user_pass1,user_pass2)

        user=User.objects.create_user(
            username=user_name,
            email=user_email,
            first_name=user_first,
            last_name=user_last,
            password=user_pass1
        )
        user.save()
        return redirect('home')
    return render (request,"signup.html")