from django.urls import path
from .views import *
urlpatterns = [
    path('getcountry/',GetCountry.as_view()),
]