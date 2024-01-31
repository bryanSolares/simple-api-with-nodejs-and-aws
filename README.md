# Contexto

AWS es uno de los proveedores pioneros de la nube, lo que ha hecho que miles de empresas migren hacía la nube, obteniendo hací los beneficios de contar con una infraestructura robusta para sus aplicaciones sin la necesidad de invertir económicamente en equipos costosos e implicaciones adicionales en el mantenimiento de éstos.

A nivel del desarrollo de software un gran porcentaje de empresas construye sus aplicaciones backend en el entorno de ejecución de Node. En un desarrollo local, la creación y ejecución de un servicio construído en Node puede ser sencillo, sin embargo, se genera la pregunta ¿cómo llevamos esto a la nube?

A continuación encontraremos una serie de pasos los cuales nos permitirá de manera sencilla y práctica el poder llevar hacía AWS nuestra aplicación. Vale la pena resaltar que esta forma es de las más sencillas y conlleva pasos manuales, no obstante, existen formas más complejas y elaboradas de poder hacer esto, incluso, desde el mismo código.

Las instrucciones a continuación están relacionadas a un despliegue y aprovisionamiento básico utilizando el servicio EC2 de AWS, obtando al final por agregar otros servicios adicionales que robustecen más nuestra aplicación en terminos de seguridad y escalabilidad.

Veamos!!!!!

1. Actualizar las dependencias de la instancia EC2

```
sudo yum update -y
```

2. Instalación de control de versiones GIT

```
sudo yum install git
```

2. Comprobando instalación correcta y versión de Git instalada

```
git --version
```

3. Instalación de gestor de versiones Node [nvm]()

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

4. Actualizar variables de entorno para que NVM puedo reconocerse dentro del arbol de comandos

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

5. Comprobando versión de NVM instalada

```
nvm --version
```

6. Descargando Versión de Node y configurar como versión predeterminada

```
nvm install <version>
nvm use <version>
```

7. Comprobar versión disponible en SO de Node instalada mediante nvm

```
node --version
```

Ya teniendo instalado node y git, se procede a descargar el código fuente del origen de alojamiento, en este caso el código fuente está alojado en Github.

Para poder descarga el código fuente de forma sencilla, utilizaremos ssh para la transferencia del repositorio hacía nuestra instancia de EC2.

1. Generar llave SSH para tener confianza de comunicación entre la instancia y repositorio

```
ssh-keygen -t ed25519 -C <your email>

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/<name key>
```

2. Posterior a agregar la Key SSH, clonamos el repositorio donde se encuentra alojando nuestro proyecto

```
git clone <link>
```

3. Navegar a carpeta descargada e instalar dependencias

```
npm i --omit=dev
```

4. Posterior a descargar todas las depencias, procedemos ejecutar la aplicación

```
npm run start
```

La aplicación finalmente se ejecutará y podres utilizar nuestro pequeño servicio construído en Node. En este punto la el servicio estará disponible mediante la IP pública proporcionada por AWS para la instancia de EC2. Sin embargo si queremos ir un poco más haya, haremos una integración con los servicios de AWS:

- ALB (Application Load Balancer)
- AWS ACM (Certificate Manager)
- Route 53

```
#!/bin/bash

sudo yum update -y

sudo yum install git

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
. ~/.nvm/nvm.sh

nvm install node 18
```
