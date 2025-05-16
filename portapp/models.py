from django.db import models

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('frontend', 'Frontend'),
        ('backend', 'Backend'),
        ('database', 'Database'),
    ]

    name = models.CharField(max_length=100)
    level = models.CharField(max_length=50)  # e.g. Beginner, Intermediate, Advanced
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)

    def __str__(self):
        return f"{self.name} ({self.level})"

class Project(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    description = models.TextField()
    stack = models.CharField(max_length=300)  # comma-separated list

    def __str__(self):
        return self.title
