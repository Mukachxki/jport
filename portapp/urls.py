from django.urls import path
from .views import skills_api, projects_api, home, about

urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('api/skills/', skills_api),
    path('api/projects/', projects_api),
]
