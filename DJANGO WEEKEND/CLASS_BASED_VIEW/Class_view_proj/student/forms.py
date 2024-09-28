from django.db import models
from django import forms
from .models import *
class Register_form(forms.ModelForm):
    class Meta:
        model=Students
        fields="__all__"
