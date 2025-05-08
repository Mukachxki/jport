from django.shortcuts import render
from .models import Project

def home_view(request):
    return render(request, 'portapp/home.html')

def about_view(request):
    projects = Project.objects.all()  # fetch all projects from DB
    return render(request, 'portapp/about.html', {'projects': projects})
