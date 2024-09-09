from django import forms
from Customer.models import *
from django.contrib.auth.forms import *
from django.contrib.auth.models import User
class Account_open(forms.ModelForm):
    class Meta:
        model=CustomerData
        fields='__all__' 
        widgets= {
            'cus_acc_no':forms.TextInput(attrs={'class':'shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light','placeholder':'Account number'}),
            'cus_name':forms.TextInput(attrs={'class':'shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light','placeholder':'Name'}),
            'cus_image':forms.ClearableFileInput(attrs={'class':'shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light','placeholder':''}),
            'cus_mobile':forms.TextInput(attrs={'class':'shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light','placeholder':'Mobile No'}),
            'cus_balance':forms.TextInput(attrs={'class':'shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light','placeholder':'Balance'}),
            }
        

class Deposite_amount(forms.ModelForm):
    deposite_amount = forms.DecimalField(max_digits=10, decimal_places=2,
    widget=forms.NumberInput(
        attrs={'class': 'form-control shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light', 'placeholder': 'Balance'}
    )
                                         
    ) 
    
    class Meta:
        model=CustomerData
        fields=['cus_acc_no','cus_name','deposite_amount']
        widgets = {
            'cus_acc_no': forms.TextInput(attrs={'class': 'form-control shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light', 'placeholder': 'Account Number*'}),
            'cus_name': forms.TextInput(attrs={'class': 'form-control shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light', 'placeholder': 'Account Number*'}),
        }


class Register_form(UserCreationForm):
    class Meta:
        model=User
        fields=['username','email','password1','password2','first_name','last_name']
        widgets= {
            'username':forms.TextInput(attrs={'class':'shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light','placeholder':'Username'}),
            'email':forms.TextInput(attrs={'class':'shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light','placeholder':'Email ID '}),
            'password1':forms.PasswordInput(attrs={'class':'shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light','placeholder':'Password 1'}),
            'password2':forms.PasswordInput(attrs={'class':'shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light','placeholder':'Password 2'}),
            'first_name':forms.TextInput(attrs={'class':'shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light','placeholder':'First Name'}),
            'last_name':forms.TextInput(attrs={'class':'shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light','placeholder':'Last name'}),
            }
        

class Login_form(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput) 
    