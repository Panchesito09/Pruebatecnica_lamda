"""
Aqui se definen las urls de la aplicacion
"""
from django.contrib import admin
from django.urls import path
from users import views
from django.conf import settings
from django.conf.urls.static import static


# Se definen las urls de la aplicacion 
urlpatterns = [
    path('admin/', admin.site.urls),#url de administrador
    path('register/', views.register), #url de registro de usuario
    path('login/', views.login), #url de login de usuario
    path('upload/', views.upload_file ), #url de subida del archivo DNA
    path('viewupload/', views.view_uploaded_files), #url de visualizacion del archivo subido
    path('execute-bot/', views.execute_bot),#url de ejecucion del bot
    path('logout/', views.logout),#url de cierra de sesion
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

