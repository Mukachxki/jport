from django.contrib import admin
from .models import Skill, Project

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'level', 'category')
    list_filter = ('category', 'level')
    search_fields = ('name',)
    ordering = ('category', 'name')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'stack')
    search_fields = ('title', 'description', 'stack')
    list_filter = ('stack',)
