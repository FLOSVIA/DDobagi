from .models import scheduleList
import serializers from rest_framework


class scheduleSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'title',
            'contents',
        )
        model = scheduleList
