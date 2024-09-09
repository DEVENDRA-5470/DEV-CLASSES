from django.contrib import admin
from my_app.models import *
# Register your models here.
@admin.register(Student_data)
class Student_admin(admin.ModelAdmin):
    list_display=['stu_image','stu_name','stu_roll','stu_address','stu_mobile']
