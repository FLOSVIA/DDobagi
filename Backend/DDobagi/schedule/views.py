from django.shortcuts import render
from .models import scheduleList

from rest_framework import generics
from .serializers import scheduleSerializer

# Create your views here.

'''
def schedule(request):
    lists = scheduleList.objects.all()
    return render(request, 'schedule.html', {'lists': lists})
'''


class Listschedule(generics.ListCreateAPIView):
    queryset = scheduleList.objects.all()
    serializer_class = scheduleSerializer


class Detailschedule(generics.RetrieveUpdateDestroyAPIView):
    queryset = scheduleList.objects.all()
    serializer_class = scheduleSerializer
