# Instrucciones para Ejecutar el Proyecto

# Descripción del Proyecto
Este proyecto es una aplicacion que permite registrar, loguear y desloguear un usuario, al igual que permite cargar un archivo por medio de la ejecucion de un bot o de manera manual

# instrucciones a seguir para manejar el aplicativo
al ejecutar el proyecto tendremos una pagina de inicio sencilla con un navigator importado, al igual que en el resto de page
1. registrar usuario
2. login
3. navegar asia robot page
4. ejecutar bot o subir archivo manual
5. cerrar sesion.


## Backend (Django)


1. **Configurar el Entorno Virtual:**
   - Navega al directorio del proyecto y crea un entorno virtual:
     ```bash
     virtualenv venv
     ```
   - Activa el entorno virtual:
     - En **Windows**:
       ```bash
       venv\Scripts\activate
       ```
     - En **macOS/Linux**:
       ```bash
       source venv/bin/activate
       ```

2. **Instalar Dependencias:**
   - Con el entorno virtual activado, instala las dependencias del proyecto usando el archivo `requirements.txt`:
     ```bash
     pip install -r requirements.txt
     ```

3. **Migraciones de Base de Datos:**
   - Realiza las migraciones para configurar la base de datos:
     ```bash
     python manage.py makemigration
     python manage.py migrate
     ```


4. **Iniciar el Servidor:**
   - Inicia el servidor de desarrollo:
     ```bash
     python manage.py runserver
     ```

## Frontend (React)


1. **Instalar Dependencias:**
   - Navega al directorio del proyecto React y ejecuta:
     ```bash
     npm install
     ```


2. **Iniciar el Servidor de Desarrollo:**
   - Ejecuta el proyecto React:
     ```bash
     npm start o run dev
     ```

   Esto iniciará el servidor de desarrollo y abrirá tu aplicación en el navegador.

