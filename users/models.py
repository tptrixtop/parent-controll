from __future__ import unicode_literals

from django.db import models

class Users(models.Model):
    name = models.CharField(max_length=200)
    cr_date = models.DateTimeField('date published')

