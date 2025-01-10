from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class GetCountry(generics.ListAPIView):
    queryset=Country.objects.all()
    serializer_class=CountrySerializer 

class GetSingleCountry(APIView):
    def get(self,request,id):
        queryset=Country.objects.get(id=id)
        serializer=CoutryNameSerializer(queryset)
        return Response(serializer.data)