import dotenv from "dotenv/config"; //Si la ruta del .env en otro .env, "dotenv/config(.env.development)"
import express from "express";
import cors from "cors";
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

app.post('/api/parqueo/calcular', (req, res) => { // Crear una ruta para calcular el costo del parqueo
    const {placa, tipo, horas, minutos} = req.body; // Obtener los datos del cuerpo de la solicitud
    if(!placa || placa.trim()==""){ // Validar que la placa no esté vacía
        res.status(400).json({ error: 'La placa es obligatoria' }); // Validar que la placa sea proporcionada
        return;
    }
    if(!tipo || tipo !== "carro" && tipo !== "moto"){ // Validar que el tipo de vehículo sea "carro" o "moto"
        res.status(400).json({ error: 'El tipo de vehículo es obligatorio' });
        return;
    }
    if(Number.isNaN(horas) || horas < 0){ // Validar que las horas sean un número positivo
        res.status(400).json({ error: 'Las horas deben ser un número positivo' });
        return;
    }
    if(Number.isNaN(minutos) || minutos < 0 || minutos > 59){ // Validar que los minutos sean un número positivo y menor a 59
        res.status(400).json({ error: 'Los minutos deben ser un número positivo y menor a 60' });
        return;
    }
    const tarifa = tipo === "carro" ? 1200 : 500; // Definir el costo por hora según el tipo de vehículo
    let h=Number(horas);
    let m=Number(minutos);
    if(m>5) h++; // Si los minutos son mayores a 5, se cobra una hora adicional
    const total = h * tarifa; // Calcular el costo total
    res.json({
        placa: placa,
        tipo: tipo,
        tarifa: tarifa,
        tiempoUso: horas+":"+minutos,
        horasCobradas: h,
        total: total
    })
});

app.listen(process.env.PORT || 4000, () => { // Iniciar el servidor en el puerto 4000
  console.log(`Servidor ejecutándose en el puerto http://localhost:${process.env.PORT || 4000}`);
});


