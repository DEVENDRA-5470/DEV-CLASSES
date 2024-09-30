from django.shortcuts import *
from django.views.generic import CreateView
from django.views.generic import ListView
from django.views.generic import DeleteView
from django.views.generic import UpdateView
from .models import *
# Create your views here.
class Create_view(CreateView):
    model=Employee
    fields="__all__"
    success_url="/"

class List_view(ListView):
    model=Employee
    fields="__all__"
    # success_url="/"

class Delete_view(DeleteView):
    model=Employee
    fields="__all__"
    success_url="/list"

class Update_view(UpdateView):
    model=Employee
    fields="__all__"
    success_url="/list"