# testSmartCode

Repo de solución al test SmartCode.



# Requerimiento:

\- Debes crear una app en React + nodejs+ MySql(u otra) en la cual se pueda registrar y loguear usuario (sin recuperación de contraseña) y en la que existan dos perfiles de usuario: Administrador y Usuario.

\- El perfil administrador solo tiene una tabla para gestionar tickets (Crud) en donde se los puede asignar a usuarios.

\- El perfil de usuario solo posee una lista de tickets asignados a el y un boton para pedirlos (setear el ticket_pedido).

\- El login de usuarios debe discriminar y redireccionar según su perfil.

\- Debes subir el proyecto a git y enviarnos las instrucciones para levantar el proyecto (incluye el script de SQL en el proyecto).

\- El proyecto cuenta con 3 Tablas:

1. Usuarios: id, id_tipouser, nombre, mail, pass

2. Ticket: id , id_user , ticket_pedido

3. Tipo_usuario: id, nombre

   Puedes ocupar el framework CSS o libreria ui de react que más te acomode.



# Entorno de desarrollo:

*Sistema Operativo:* Linux - elementary OS 5.1.6 Hera.

*Nodejs:* v14.4.0

*Npm:* 6.14.5

*Docker:*  19.03.8, build afacb8b7f0

# Descripción: 

La app esta desarrollada bajo el stack MERN con las siguientes tecnologías,

​	MySQL + Express + React + Nodejs.

En el archivo package.json se especifican los módulos Utilizados y necesarios para levantar la aplicación, tanto dependencias de desarrollo como dependencias de producción.	

```
	  "dependencies": 

​	  {

​	    "bcryptjs": "^2.4.3",

​	    "connect-flash": "^0.1.1",

​	    "express": "^4.17.1",

​	    "express-mysql-session": "^2.1.4",

​	    "express-session": "^1.17.1",

​	    "morgan": "^1.10.0",

​	    "mysql": "^2.18.1",

​	    "passport": "^0.4.1",

​	    "passport-local": "^1.0.0",

​	    "react-router-dom": "^5.2.0"

​	  },

​	  "devDependencies": 

​	  {

​	    "@babel/core": "^7.10.4",

​	    "@babel/preset-env": "^7.10.4",

​	    "@babel/preset-react": "^7.10.4",

​	    "babel-loader": "^8.1.0",

​	    "nodemon": "^2.0.4",

​	    "react": "^16.13.1",

​	    "react-dom": "^16.13.1",

​	    "webpack": "^4.43.0",

​	    "webpack-cli": "^3.3.12"

​	  }
```

​	  

Para correr la aplicación debemos seguir estos sencillos pasos:



1.- Clonar el repositorio de la aplicación que esta ubicado en la siguiente url:

```
	https://github.com/Sagertp/testSmartCode.
```



Para ello utilizaremos el siguiente comando:

```
	sudo git clone https://github.com/Sagertp/testSmartCode.
```



2.- Debemos ubicarnos en el directorio clonado en este caso:

```
	cd /home/sagertp/Documents/Personal/devops/testSmartCode.
```

 

Una vez ubicados en el directorio deberán ser instaladas las dependencias de proyecto con el comando:

```
	npm install.
```

 

 3.- Una vez instaladas las dependencias solo queda levantar el servidor de bases de datos, en este caso se utilizó:

​		*MySQL Community Server - GPL versión: 8.0.20*, En un contenedor de Docker Utilizando el siguiente comando:

```
	sudo docker run -d -p 3306:3308 --name smartCodeDb -e MYSQL_ROOT_PASSWORD=1qazxsw2*- -e MYSQL_DATABASE=smartcode mysql --default-authentication-plugin=mysql_native_password
```

 

Sin embargo se puede utilizar cualquier servidor MySQL, Es importante que para el funcionamiento de la app se modifique el archivo de configuración para la conexión a la base de datos *dbconfig.json* dentro del directorio Models, con los datos de la dirección ip del servidor utilizado.



Directorio:

```
	/home/sagertp/Documents/Personal/devops/testSmartCode/src/models
```



Extracto del archivo:

```
	{

​	  "mysql" : 

​	  {

​	      "connectionLimit": 10,

​	      "host": "192.168.43.160", // Debe ser cambiada por ip utilizada.

​	      "port": "3308",

​	      "user": "root",

​	      "password": "1qazxsw2*-",

​	      "database": "smartcode",

​	      "insecureAuth" : true,

​	      "_socket": "/var/run/mysqld/mysqld.sock"

​	  }

​	}
```



El script SQL *user.sql* se encuentra en el directorio Models de la aplicación este debe ser importado al servidor que estemos utilizando, la manera mas sencilla es copiando el script en la consola de MySQL o con el siguiente comando:

```
mysql -u root -p smartcode < user.sql
```



Directorio:

```
	/home/sagertp/Documents/Personal/devops/testSmartCode/src/models
```

  

4.- Una vez logrado levantar el servidor MySQL debemos utilizar 2 script npm que están en la sección de script del package.json.

```
	"scripts": 

​	{

​    "test": "echo \"Error: no test specified\" && exit 1",

​    "start": "node src/index.js",

​    "dev": "nodemon src/index.js",

​    "webpack": "webpack --mode development --watch"

​    }
```

 

*En primer lugar:*  webpack, este script nos permitirá que las tecnologías webpack y babel, conviertan el código jsx de React a código js entendible por los navegadores.

```
	npm webpack
```

 

*En segundo lugar:*  dev, este script nos permitirá que las tecnologías de monitores y arranque de la aplicación levanten el servicio y podamos acceder a la aplicación. 

```
	npm run dev
```

 

A partir de este momento la aplicación estará escuchando peticiones en el puerto 3000 y podemos acceder a ella con cualquier navegador web.

 

# Usando la aplicación:

 



Para ingresar a la aplicación  se cuenta con 3 usuarios pre configurados en el script SQL uno para administración y dos para el uso de la aplicación, ademas de cuatro 4 tickets de prueba para ser utilizados, todos estos datos pueden ser modificados o agregar nuevos, gracias a la funcionalidad CRUD de la aplicacion. 



```
	INSERT INTO tipo_usuario (id_tipo_usuario, nombre) VALUES 

​	(1, "administrador"),

​	(2, "usuario");

​	

​	INSERT INTO usuarios (id_usuario, id_tipo_usuario, email, nombre, pass) VALUES

​	(1, 1, "administrador@smartcode.com", "Administrador", "1qazxsw2*-"),

​	(2, 2, "usuario1@smartcode.com", "Usuario 1", "qwerty*-1"),

​	(3, 2, "usuario2@smartcode.com", "Usuario 2", "qwerty*-2");

​	

​	INSERT INTO ticket (id_ticket, id_usuario, ticket_pedido) VALUES 

​	(1, 2, ""), 

​	(2, 2, ""),

​	(3, 3, ""),

​	(4, 3, "");
```

En la vista de login se debe utilizar las credenciales que muestra este cuadro.

