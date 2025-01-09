from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *

# Create your views here.

class GetCountry(generics.ListAPIView):
    queryset=Country.objects.all()
    serializer_class=CountrySerializer
