from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    img=models.ImageField( null=True ,upload_to='profile_pic/',default="")
    full_name=models.CharField( null=True, max_length=200)
    bio=models.TextField( null=True )
    insta=models.URLField( null=True )
