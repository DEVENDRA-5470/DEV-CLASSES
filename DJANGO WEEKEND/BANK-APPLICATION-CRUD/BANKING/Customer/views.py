from django.shortcuts import *
from Customer.models import *
from Customer.forms import *
from django.contrib.auth import *
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

def register(request):
    if request.method=="POST":
        form=Register_form(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
        else:
            return HttpResponse("KUCH DIKKAT HAI")
            

    form=Register_form()
    context={'form':form}
    return render(request,'register.html',context)

def user_login(request):
    if request.method=="POST":
        form=Login_form(request.POST)
        if form.is_valid():
            username=form.cleaned_data['username']
            password=form.cleaned_data['password']
            user=authenticate(request,username=username,password=password)
            if user is not None:
                login(request,user)
                return redirect('home')
            else:
                return HttpResponse("Kuch dikkat hai")
        print(username,password)
    return render(request ,'login.html')

def user_logout(request):
    logout(request)
    return redirect('login')