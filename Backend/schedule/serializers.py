from .models import scheduleList
from rest_framework import serializers


class scheduleSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'title',
            'contents',
        )
        model = scheduleList
