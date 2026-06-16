import express from "express";

const app = express(); // Crear una instancia de Express

app.get("/", (req, res) => { // Crear una ruta para la raíz del servidor
    res.send('<h1>Hola JP</h1>');
});

app.listen(4000, () => { // Iniciar el servidor en el puerto 4000
  console.log("Servidor ejecutándose en el puerto http://localhost:4000");});


