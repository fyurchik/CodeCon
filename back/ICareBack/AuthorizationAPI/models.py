from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.db import models


class City(models.Model):
    name = models.CharField(max_length=100)
  
class Tag(models.Model):
    name = models.CharField(max_length=100)
    
class Application(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    content = models.TextField()
    active = models.BooleanField(default=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    age = models.IntegerField()
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag)