import dotenv from "dotenv/config"; //Si la ruta del .env en otro .env, "dotenv/config(.env.development)"
import express from "express";
import cors from "cors";
const { NAME, VERSION, DESCRIPTION, AUTHOR } = process.env; // Obtener las variables de entorno del archivo .env

const app = express(); // Crear una instancia de Express

app.use(cors()); // Habilitar CORS para permitir solicitudes desde el frontend
app.use(express.json()); // Habilitar el análisis de JSON en las solicitudes entrantes

app.get("/", (req, res) => { // Crear una ruta para la raíz del servidor
   res.json({
        NAME: NAME,
        VERSION: VERSION,
        DESCRIPTION: DESCRIPTION,
        AUTHOR: AUTHOR,
   });
});

app.listen(4000, () => { // Iniciar el servidor en el puerto 4000
  console.log("Servidor ejecutándose en el puerto http://localhost:4000");});


