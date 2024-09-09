from django.db import models

# Create your models here.
class Student_data(models.Model):
    stu_image=models.ImageField(upload_to='uploads/')
    stu_name=models.CharField(max_length=100)
    stu_roll=models.CharField(max_length=5)
    stu_mobile=models.BigIntegerField(default=0000000000)
    stu_address=models.TextField(max_length=200)
