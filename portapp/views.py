from django.shortcuts import render
from .models import Project
from django.http import JsonResponse

def home_view(request):
    return render(request, 'portapp/home.html')

def about_view(request):
    projects = Project.objects.all()  # fetch all projects from DB
    return render(request, 'portapp/about.html', {'projects': projects})

def get_data(request):
    data = {
  "name": "Ian Joseph",
  "skills": ["Django", "React", "Next.js", "Python"],
  "portfolio": [
    { "title": "Project 1", "url": "http://127.0.0.1:8000/" },
    
  ]
}
    return JsonResponse(data)
