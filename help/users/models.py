from django.db import models

# Create your models here.
class Users (models.Model):
    name = models.CharField(max_length = 500)
    longitude = models.DecimalField(max_digits = 6, decimal_places = 2)
    latitude = models.DecimalField(max_digits = 6, decimal_places = 2)

    def __str__(self):
        return self.name