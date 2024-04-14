from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role= models.TextField(max_length=500)

class Tag(models.Model):
    name = models.CharField(max_length=100)
    
class Application(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    content = models.TextField()
    active = models.BooleanField(default=True)
    urgent = models.CharField(max_length=15,default='all')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    age = models.IntegerField()    
    tags = models.ManyToManyField(Tag, blank=True)
    phone_number = models.CharField(max_length=15)
    city = models.CharField(max_length=30, blank=True)
    email = models.EmailField(max_length=30, blank=True)

    