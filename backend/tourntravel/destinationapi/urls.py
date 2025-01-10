from django.urls import path
from .views import *
urlpatterns = [
    path('getcountry/',GetCountry.as_view()),
    path('getcountry/<id>/',GetSingleCountry.as_view()),
]