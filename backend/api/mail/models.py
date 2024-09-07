from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    pass

class Emotion(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    emotion = models.TextField(blank=False)
    description = models.TextField(blank=True)
    color = models.TextField(blank=False, default='none')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='emotions')