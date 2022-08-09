# API de E-commerce 
API E-commerce es el servidor principal para el uso de la aplicacion mobil construido en react native, esta contiene la logica de negocio general

## _Elementos necesarios_

- Email y [contraseña de aplicaciones](https://support.google.com/accounts/answer/185833?hl=es) para el uso de Nodemailer
- [URI](https://www.mongodb.com/docs/manual/reference/connection-string/) para la conexion a la base de datos

## _Tecnologias_

Api E-commerce utiliza una serie de proyectos de código abierto para funcionar correctamente: 

- [node.js] - 
- [Express] -
- [Nodemailer] - envios de email
- [JWT] - token de seguridad
- [MongoDB] - Base de dato no relacional
- [Mongoose] - [ORM de MongoDB](https://mongoosejs.com/docs/guide.html)
- [SwaggerUI] - Swagger

## _Installation_

La api requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd s3-06-m-reactnative-node/server
npm i
node app
```

For production environments...

```sh
URI_DB=Conexion con MongoAtlas
JWT_SECRET=palabra secreta
EMAIL=
KEY_MAIL=contraseña de aplicacion del email
SWAGGER_PORT= 'URL DEL SERVER LOCAL'

```


