from django.db import models

class Users(models.Model):

    name = models.CharField(max_length=100)

    @classmethod
    def create(cls, name):
        user = cls(name=name)
        return user

    @classmethod
    def setName(name):
        self.name = name
        return 

    @classmethod
    def getName():
        return self.name

