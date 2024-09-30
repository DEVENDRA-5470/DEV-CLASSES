from django.db import models

# Create your models here.
class Employee(models.Model):
    emp_name=models.CharField(max_length=20)
    emp_mob=models.CharField(max_length=20)
    emp_email=models.CharField(max_length=20)
    emp_age=models.CharField(max_length=20)

    def __str__(self) -> str:
        return f"{self.emp_name}"