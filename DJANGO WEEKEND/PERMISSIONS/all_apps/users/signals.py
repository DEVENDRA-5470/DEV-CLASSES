from django.db.models.signals import *
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.auth.signals import user_logged_in
from django.utils.timezone import now

@receiver(post_save ,sender=User)
def create_user_profile(sender,instance,created,**kwargs):
    if created and not instance.is_superuser:
        profile=Profile.objects.create(user=instance)


@receiver(post_save,sender=User)
def save_user_profile(sender,instance,**kwargs):
    if not instance.is_superuser:
        instance.profile.save()