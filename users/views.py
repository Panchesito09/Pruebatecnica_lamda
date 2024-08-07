from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from rest_framework.response import Response
from .serializers import UserProfileSerializer,UploadedFileSerializer
from .models import UserProfile,UploadedFile
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from  rest_framework.authentication import TokenAuthentication
import subprocess



@api_view(['POST'])
def register(request):
    """Registra un nuevo usuario
    Args: request (HttpRequest): La petición HTTP
    Returns: Response: La respuesta HTTP

    """
    serializer = UserProfileSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()  # El serializador se encarga de guardar el usuario con la contraseña encriptada

        # Crea un token para el usuario registrado
        token, created = Token.objects.get_or_create(user=user)

        return Response({'token': token.key}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    """Inicia sesión de un usuario
    Args: request (HttpRequest): La petición HTTP
    Returns: Response: La respuesta HTTP con el token y el nombre del usuario
    """
    user=get_object_or_404(UserProfile, email=request.data['email'])
    if not user.check_password(request.data['password']):
        return Response({'error': 'Contraseña incorrecta'}, status=status.HTTP_400_BAD_REQUEST)
    token, created = Token.objects.get_or_create(user=user)
    return Response({'token': token.key, 'name': user.name}, status=status.HTTP_200_OK)

#cerrar sesion
@api_view(['POST'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def logout(request):
    """Cierra la sesión de un usuario y elimina el token
    Args: request (HttpRequest): La petición HTTP
    Returns: Response: La respuesta HTTP
    """

    # Obtener el token del header 'Authorization'
    auth_header = request.headers.get('Authorization')
    if auth_header and auth_header.startswith('Token '):
        token = auth_header.split(' ')[1]
    else:
        return Response({'error': 'Token is required'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        token_obj = Token.objects.get(key=token)
        token_obj.delete()
        return Response({'message': 'Se cerro sesion correctamente'}, status=status.HTTP_200_OK)
    except Token.DoesNotExist:
        return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def upload_file(request):
    """Se encarga de subir un archivo
    Args: request (HttpRequest): La petición HTTP
    Returns: Response: La respuesta HTTP con el archivo subido
    """
    serializer = UploadedFileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([TokenAuthentication])
def view_uploaded_files(request):
    """Muestra el archivo subido más reciente
    Args: request (HttpRequest): La petición HTTP
    Returns: Response: La respuesta HTTP con el archivo subido más reciente y su fecha de subida
    """
    try:
        latest_file = UploadedFile.objects.latest('uploaded_at')
        return Response({
            'file': latest_file.file.url,
            'uploaded_at': latest_file.uploaded_at
        })
    except UploadedFile.DoesNotExist:
        return Response({
            'file_url': None,
            'upload_date': None
        })
@api_view(['POST'])
def execute_bot(request):
    """Ejecuta el archivo del bot
    Args: request (HttpRequest): La petición HTTP
    Returns: Response: La respuesta HTTP con la salida y los errores de la ejecución
    """
    try:
        # Ejecuta el archivo del bot
        result = subprocess.run(['python', 'bot.py'], capture_output=True, text=True)
        return Response({'output': result.stdout, 'error': result.stderr}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)