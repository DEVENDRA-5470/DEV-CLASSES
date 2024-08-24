from django.contrib import admin
from Customer.models import *
@admin.register(CustomerData)
# Register your models here.
class CustomerAdmin(admin.ModelAdmin):
    # list_display=['cus_acc_no','cus_name','cus_image','cus_mobile','cus']
    list_display=[field.name for field in CustomerData._meta.fields]