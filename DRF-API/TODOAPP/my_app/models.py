from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class My_todo(models.Model):
    task_created_by=models.ForeignKey(User,on_delete=models.CASCADE,related_name="task")
    task_title=models.CharField(max_length=200)
    task_desc=models.TextField()


    def __str__(self):
        return f"{self.task_title}"
