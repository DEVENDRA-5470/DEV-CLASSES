from django.db import models

# Create your models here.
class Accounts(models.Model):
    cus_ac_no=models.CharField(max_length=10,null=True)
    cus_ac_holder=models.CharField(max_length=10,null=True)
    cus_mob=models.CharField(max_length=10,null=True)
    cus_address=models.CharField(max_length=10,null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)