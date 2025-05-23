from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from portapp import views 


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('portapp.urls')),  
    path('api/data/', views.get_data, name='get_data'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
