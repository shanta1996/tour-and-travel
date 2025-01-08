from django.db import models

# Create your models here.
class Country(models.Model):
    country_name=models.CharField(max_length=100)
    capital_name=models.CharField(max_length=100)
    languages=models.CharField(max_length=300)
    regigions=models.CharField(max_length=300)
    telephone_code=models.CharField(max_length=150)
    image=models.CharField(max_length=100)