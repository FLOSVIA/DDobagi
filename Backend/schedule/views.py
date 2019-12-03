from django.shortcuts import render
from .models import scheduleList

# Create your views here.


def schedule(request):
    lists = scheduleList.objects.all()
    return render(request, 'schedule.html', {'lists': lists})
