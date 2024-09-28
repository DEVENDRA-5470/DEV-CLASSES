from django.db import models

# Create your models here.
class Students(models.Model):
    stu_name=models.CharField(max_length=200)
    stu_mobile=models.CharField(max_length=12)
    stu_roll=models.CharField(max_length=200)
    stu_address=models.TextField()

    class Meta:
        verbose_name_plural="My student"