from django.shortcuts import render
from .models import scheduleList

from rest_framework import generics
from ./serializers import scheduleSerializer

# Create your views here.


def schedule(request):
    lists = scheduleList.objects.all()
    return render(request, 'schedule.html', {'lists': lists})
