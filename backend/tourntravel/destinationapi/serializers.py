from .views import *
from .models import *
from rest_framework import serializers

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model=Country
        fields='__all__'