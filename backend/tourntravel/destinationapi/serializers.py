from .views import *
from .models import *
from rest_framework import serializers

class CoutryNameSerializer(serializers.ModelSerializer):
    class Meta:
        model=CountryName
        fields=['country_name']

class CountrySerializer(serializers.ModelSerializer):
    country_name=CoutryNameSerializer()
    class Meta:
        model=Country
        fields='__all__'
        


        