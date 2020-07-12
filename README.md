# testSmartCode
Repo de solución al test SmartCode.


La app esta desarrollada bajo el stack MERN con las siguientes tecnologías
MySQL + Express + React + Nodejs
 
En el archivo package.json de especifican los módulos necesarios para levantar la aplicación, tan dependencias de desarrollo como dependencias de producción,
estas deberán ser instaladas con el comando npm install.
 
una vez instaladas las dependencias solo queda levantar el servidor de bases de datos, en este caso se utilizó MySQL Community Server - GPL versión: 8.0.20,
en un contenedor de Docker Utilizando el siguiente comando: 
sudo docker run -d -p 3306:3306 --name smartCodeDb -e MYSQL_ROOT_PASSWORD=1qazxsw2*- -e MYSQL_DATABASE=smartcode mysql --default-authentication-plugin=mysql_native_password. 
 
El script SQL se encuentra en el directorio Models de la aplicación.
 
Es importante para el funcionamiento de la app que se modifique el archivo de configuración dbconfig.json dentro del directorio Models con los datos de la dirección ip del servidor utilizado.
 
Una vez logrado levantar el servidor MySQL debemos utilizar 2 script npm que están en la sección de script del package.json
 
1.- npm run webpack : este script nos permitirá que las tecnologías de transpilacion conviertan el código jsx de React a código js entendible por los navegadores.
 
2.- npm run dev :  este script nos permitirá que las tecnologías de monitores y arranque de la aplicación levanten el servicio y podamos acceder a la aplicación, está está configurada para escuchar peticiones en el puerto 3000.