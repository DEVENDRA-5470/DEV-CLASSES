from django.db import models

# Create your models here.
import string
import random
def random_acc_gen():
    ac="".join(random.choices(string.digits,k=10))
    return ac
    

class CustomerData(models.Model):
    cus_acc_no=models.CharField(max_length=20 ,null=True,unique=True ,default=random_acc_gen())
    cus_name=models.CharField(max_length=20,null=True)
    cus_image=models.ImageField(upload_to='uploads/',null=True)
    cus_mobile=models.CharField(max_length=20,null=True)
    cus_balance=models.BigIntegerField(null=True,default=0)
    cus_created_at=models.DateTimeField(auto_now_add=True)
    cus_updated_at=models.DateTimeField(auto_now=True)