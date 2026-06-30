import dotenv from "dotenv/config"; //Si la ruta del .env en otro .env, "dotenv/config(.env.development)"
import express from "express";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.routes.js"; // Importar las rutas de usuarios desde el archivo de rutas
import loginRoutes from "./routes/login.routes.js"; // Importar las rutas de login desde el archivo de rutas
import parqueoRoutes from "./routes/parqueo.routes.js"; // Importar las rutas del parqueo desde el archivo de rutas

const { NAME, VERSION, DESCRIPTION, AUTHOR } = process.env; // Obtener las variables de entorno del archivo .env
const app = express(); // Crear una instancia de Express

app.use(cors()); // Habilitar CORS para permitir solicitudes desde el frontend

app.use(express.json()); // Habilitar el análisis de JSON en las solicitudes entrantes

app.get("/", (req, res) => { // Crear una ruta para la raíz del servidor
   res.json({
        name: NAME,
        version: VERSION,
        description: DESCRIPTION,
        author: AUTHOR,
   });
});

app.use('/api/parqueo', parqueoRoutes); // Usar las rutas  del parqueo para cualquier solicitud que comience con /api/parqueo
app.use('/api/usuarios', usuariosRoutes); // Usar las rutas de usuarios para cualquier solicitud que comience con /api/usuarios
app.use('/api/login', loginRoutes); // Usar la ruta de login para iniciar sesion

app.listen(process.env.PORT || 4000, () => { // Iniciar el servidor en el puerto 4000
  console.log(`Servidor ejecutándose en el puerto http://localhost:${process.env.PORT || 4000}`);
});


