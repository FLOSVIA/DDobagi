from django.urls import path

from . import views

urlpatterns = [
    path('', views.Listschedule.as_view()),
    path('<int:pk>/', views.Detailschedule.as_view()),
]
