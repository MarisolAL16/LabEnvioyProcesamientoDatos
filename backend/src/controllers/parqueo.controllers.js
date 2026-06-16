export function carcularCobro(req,res){
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
    });
}
