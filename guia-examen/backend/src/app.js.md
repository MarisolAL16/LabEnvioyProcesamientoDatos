# backend\src\app.js

```js
import dotenv from "dotenv/config"; //Si la ruta del .env en otro .env, "dotenv/config(.env.development)" // importa una dependencia o archivo que se usara aqui.
import express from "express"; // importa una dependencia o archivo que se usara aqui.
import cors from "cors"; // importa una dependencia o archivo que se usara aqui.
import usuariosRoutes from "./routes/usuarios.routes.js"; // Importar las rutas de usuarios desde el archivo de rutas // linea necesaria para que este archivo cumpla su funcion.
import loginRoutes from "./routes/login.routes.js"; // Importar las rutas de login desde el archivo de rutas // linea necesaria para que este archivo cumpla su funcion.
import parqueoRoutes from "./routes/parqueo.routes.js"; // Importar las rutas del parqueo desde el archivo de rutas // linea necesaria para que este archivo cumpla su funcion.
// se deja espacio para separar secciones del codigo.
const { NAME, VERSION, DESCRIPTION, AUTHOR } = process.env; // Obtener las variables de entorno del archivo .env // declara una variable o constante para guardar un dato.
const app = express(); // Crear una instancia de Express // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
app.use(cors()); // Habilitar CORS para permitir solicitudes desde el frontend // permite que el frontend pueda hacer peticiones al backend.
// se deja espacio para separar secciones del codigo.
app.use(express.json()); // Habilitar el anÃ¡lisis de JSON en las solicitudes entrantes // permite recibir datos JSON en las peticiones.
// se deja espacio para separar secciones del codigo.
app.get("/", (req, res) => { // Crear una ruta para la raÃ­z del servidor // define una ruta GET del servidor.
   res.json({ // envia datos en formato JSON al cliente.
        name: NAME, // linea necesaria para que este archivo cumpla su funcion.
        version: VERSION, // linea necesaria para que este archivo cumpla su funcion.
        description: DESCRIPTION, // linea necesaria para que este archivo cumpla su funcion.
        author: AUTHOR, // linea necesaria para que este archivo cumpla su funcion.
   }); // abre o cierra bloques de codigo.
}); // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
app.use('/api/parqueo', parqueoRoutes); // Usar las rutas  del parqueo para cualquier solicitud que comience con /api/parqueo // conecta rutas o middleware al servidor.
app.use('/api/usuarios', usuariosRoutes); // Usar las rutas de usuarios para cualquier solicitud que comience con /api/usuarios // conecta rutas o middleware al servidor.
app.use('/api/login', loginRoutes); // Usar la ruta de login para iniciar sesion // conecta rutas o middleware al servidor.
// se deja espacio para separar secciones del codigo.
app.listen(process.env.PORT || 4000, () => { // Iniciar el servidor en el puerto 4000 // inicia el servidor en el puerto configurado.
  console.log(`Servidor ejecutÃ¡ndose en el puerto http://localhost:${process.env.PORT || 4000}`); // linea necesaria para que este archivo cumpla su funcion.
}); // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
// se deja espacio para separar secciones del codigo.
```
