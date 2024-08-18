from django.shortcuts import render
from django.http import *
from .models import *

# Create your views here.
def home(request):
    data={"name1":"shivam","name2":"prince"}
    marks={"m1":100,"m2":200}
    context={'data':data,'marks':marks}
    return render(request,'home.html',context)

def about(request):
    text=r"""C:\Users\dell\OneDrive\Desktop\DEV CLASSES\DJANGO WEEKEND\FIRST_PROJECT\my_app\views.py
      changed, reloading.
      System check identified no issues (0 silenced)."""

    context={'text':text}
    return render(request,'about.html',context)

def student(request):
    data=Student_data.objects.all()
    print(data.query)
    context={'data':data}
    return render(request,'student.html',context)