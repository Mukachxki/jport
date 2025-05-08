from django.contrib import admin
from django.urls import path, include
from portapp import views 


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('portapp.urls')),  
    path('api/data/', views.get_data, name='get_data'),
]
