from django.shortcuts import redirect, render,get_object_or_404
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
    

# Delete view--------------------------
def delete_view(request,id):
    if request.method=="GET":
        obj=CustomerData.objects.get(pk=id)
        obj.delete()
        return redirect('home')
    
def deposite_amount(request,id):
    obj=get_object_or_404(CustomerData,pk=id)
    if request.method=="POST":
        form=Deposite_amount(request.POST,request.FILES,instance=obj)
        if form.is_valid():
            balance=form.cleaned_data['deposite_amount']
            print(balance,"--------------------")
            obj.cus_balance += balance
            obj.save()
            return redirect('home')
    else:
        form=Deposite_amount(instance=obj)
        context={'form':form}
        return render(request,'deposite.htm',context)
    

def withdraw_amount(request,id):
    obj=get_object_or_404(CustomerData,pk=id)
    if request.method=="POST":
        form=Deposite_amount(request.POST,request.FILES,instance=obj)
        if form.is_valid():
            balance=form.cleaned_data['deposite_amount']
            print(balance,"--------------------")
            obj.cus_balance -= balance
            obj.save()
            return redirect('home')
    else:
        form=Deposite_amount(instance=obj)
        context={'form':form}
        return render(request,'deposite.htm',context)
    

# update customer detail