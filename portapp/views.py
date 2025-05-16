from django.http import JsonResponse
from django.shortcuts import render
from django.conf import settings
from .models import Skill, Project


def home(request):
    return render(request, 'portapp/home.html')

def about(request):
    return render(request, 'portapp/about.html')

def get_data(request):
    return JsonResponse({"message": "Hello from Django!"})

def skills_api(request):
    skills = Skill.objects.all()
    data = {}
    for skill in skills:
        data.setdefault(skill.category, []).append({
            'name': skill.name,
            'level': skill.level
        })
    return JsonResponse(data)

def projects_api(request):
    projects = Project.objects.all()
    data = [{
        'title': p.title,
        'image': request.build_absolute_uri(p.image.url) if p.image else '',
        'description': p.description,
        'stack': p.stack.split(',')
    } for p in projects]
    return JsonResponse(data, safe=False)

