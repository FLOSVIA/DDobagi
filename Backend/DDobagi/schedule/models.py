from django.db import models

# Create your models here.
from django.db import models

# Create your models here.


class scheduleList(models.Model):
    title = models.CharField(max_length=50)
    contents = models.TextField()
    objects = models.Manager()

    def __str__(self):
        return '{}'.format(self.title)
