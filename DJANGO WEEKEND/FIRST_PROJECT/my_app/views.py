from django.shortcuts import render
from django.http import *

# Create your views here.
def home(request):
    data={"name1":"shivam","name2":"prince"}
    marks={"m1":100,"m2":200}
    context={'data':data,'marks':marks}
    return render(request,'home.html',context)

def about(request):
    text=r"""C:\Users\dell\OneDrive\Desktop\DEV CLASSES\DJANGO WEEKEND\FIRST_PROJECT\my_app\views.py
      changed, reloading.
      System check identified no issues (0 silenced).
August 17, 2024 - 15:56:07
Django version 5.0.6, using settings 'FIRST_PROJECT.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
"""
    context={'text':text}
    return render(request,'about.html',context)