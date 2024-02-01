1. Dockerfile
2. Contruir imagen de Dockerfile
   docker build -t <name>:<tag> .

3. Generando nueva versión de la imagén
   docker image tag <image-name>:<tag> <image-new-name>:<tag>

4. Creando repositorio en AWS ECR
   nombrar repositorio
   configuraciones por defecto
   view command push

   Asegurarse tener instalado la CLI de AWS https://docs.aws.amazon.com/es_es/cli/latest/userguide/getting-started-install.html
   Asegurarse estar logueado con credenciales para desarrollador

   Comandos para windows/linux \***\*Recuperando un token de autenticación para el cliente Docker
   (Get-ECRLoginCommand).Password | docker login --username AWS --password-stdin 882388557962.dkr.ecr.us-east-1.amazonaws.com
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 882388557962.dkr.ecr.us-east-1.amazonaws.com
   \*\***Construyendo la imagen
   docker build -t express-simple-api .
   docker build -t express-simple-api .
   **\***Posterior a construída la imágen de procede a etiquetar
   docker tag express-simple-api:latest 882388557962.dkr.ecr.us-east-1.amazonaws.com/express-simple-api:latest
   docker tag express-simple-api:latest 882388557962.dkr.ecr.us-east-1.amazonaws.com/express-simple-api:latest
   **\***Cargando imagen al repositorio de AWS
   docker push 882388557962.dkr.ecr.us-east-1.amazonaws.com/express-simple-api:latest
   docker push 882388557962.dkr.ecr.us-east-1.amazonaws.com/express-simple-api:latest

5. Creación de cluster tipo Fargate
6. Creación de Definición de Tarea
   asignar taskExecucion role
