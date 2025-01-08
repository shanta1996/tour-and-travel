from django.db import models

# Create your models here.
class Country(models.Model):
    country_name=models.CharField(max_length=100)
    capital_name=models.CharField(max_length=100)
    languages=models.CharField(max_length=300)
    religions=models.CharField(max_length=300)
    telephone_code=models.CharField(max_length=150)
    image=models.FileField(upload_to='static/uploads')

    def __str__(self):
        return self.country_name