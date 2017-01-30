from __future__ import unicode_literals

from django.db import models

class Users(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200, null=True)
    cr_date = models.DateTimeField('date published')

class DeviceModels(models.Model):
    name = models.CharField(max_length=200)
    device_type = models.IntegerField()

class Devices(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE, null=True)
    model = models.ForeignKey(DeviceModels, on_delete=models.CASCADE, null=True)
    last_online = models.DateTimeField('last device online in system')

