from django.shortcuts import *
from django.views import View
from .forms import *
from .models import *
# Create your views here.
class Register_View(View):
    def get(self,request):
        form=Register_form()
        
        Student= Students.objects.all()
        context={'form':form,"student" : Student}
        print(form)
        return render(request,'register.html',context)
    
    def post(self,request):
        form=Register_form(request.POST)
        if form.is_valid():
            form.save()
            form=Register_form()

            return redirect("register")
        

    



