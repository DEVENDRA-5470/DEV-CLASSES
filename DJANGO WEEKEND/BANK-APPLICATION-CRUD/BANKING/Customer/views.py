from django.shortcuts import redirect, render
from Customer.models import *
from Customer.forms import *
# Create your views here.
def home(request):
    if request.method=="POST":
        form=Account_open(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form=Account_open()
        obj=CustomerData.objects.all()
        context={'obj':obj,'form':form}
        return render(request,'home.html',context)