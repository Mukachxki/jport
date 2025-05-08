# portapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),         # ✅ use home_view
    path('about/', views.about_view, name='about'),
]
