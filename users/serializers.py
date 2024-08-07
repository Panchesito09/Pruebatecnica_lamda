from rest_framework import serializers
from .models import UserProfile, UploadedFile

# Creamos un serializador para el modelo UserProfile que incluye todos los campos
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }
    from rest_framework import serializers
from .models import UserProfile

# Creamos un serializador para el modelo UserProfile que incluye todos los campos tambien 
class UserProfileSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Define el campo password

    class Meta:
        model = UserProfile
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)  # Extrae la contraseña de los datos validados
        user = UserProfile.objects.create(**validated_data)
        if password:
            user.set_password(password)  # Establece la contraseña
            user.save()  # Guarda el usuario con la contraseña encriptada
        return user
# Creamos un serializador para el modelo UploadedFile que invluye id, file y uploaded_at
class UploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = ['id', 'file', 'uploaded_at']
