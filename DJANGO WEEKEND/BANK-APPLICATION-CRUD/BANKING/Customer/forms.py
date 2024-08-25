from django import forms
from Customer.models import *
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