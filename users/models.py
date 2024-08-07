from django.db import models
from django.contrib.auth.models import AbstractUser

#Creamos un modelo UserProfile que hereda de AbstractUser y añadimos los campos solicitados
class UserProfile(AbstractUser):
    name= models.CharField(max_length=100,null=False,blank=False)
    age = models.PositiveIntegerField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=[('M', 'Male'), ('F', 'Female')], null=True, blank=True)
    cc = models.CharField(max_length=20, unique=True, blank=False, null=False)
    phone = models.CharField(max_length=15, null=True, blank=True)

    username = models.CharField(max_length=150, unique=True, null=True, blank=True) 
    
    def __str__(self):
        return self.username
#Creamos un modelo UploadedFile que guarda los archivos subidos por los usuarios
class UploadedFile(models.Model):
    file = models.FileField(upload_to='uploads/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.file.name
