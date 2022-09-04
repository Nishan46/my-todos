import email
from django.db import models

# Create your models here.

class Custom_User(models.Model):
    user_name = models.CharField(max_length=10 , primary_key=True)
    Name = models.CharField(max_length=100)
    email = models.EmailField()
    token = models.CharField(max_length=50 , null=True ,blank=True)

    def __str__(self):
        return '{}'.format(self.email)

class Todo(models.Model):
    user = models.ForeignKey(Custom_User,on_delete=models.CASCADE)
    todo =  models.CharField(max_length=100 , primary_key=True)


    def __str__(self):
        return '{} from {}'.format(self.todo , self.user.Name)
