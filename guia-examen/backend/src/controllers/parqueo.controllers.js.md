# backend\src\controllers\parqueo.controllers.js

```js
export function carcularCobro(req,res){ // crea y exporta una funcion para usarla desde otro archivo.
    const {placa, tipo, horas, minutos} = req.body; // Obtener los datos del cuerpo de la solicitud // saca datos enviados por el cliente en la peticion.
    if(!placa || placa.trim()==""){ // Validar que la placa no estÃ© vacÃ­a // valida una condicion antes de continuar.
        res.status(400).json({ error: 'La placa es obligatoria' }); // Validar que la placa sea proporcionada // prepara una respuesta HTTP con un codigo de estado.
        return; // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
    if(!tipo || tipo !== "carro" && tipo !== "moto"){ // Validar que el tipo de vehÃ­culo sea "carro" o "moto" // valida una condicion antes de continuar.
        res.status(400).json({ error: 'El tipo de vehÃ­culo es obligatorio' }); // prepara una respuesta HTTP con un codigo de estado.
        return; // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
    if(Number.isNaN(horas) || horas < 0){ // Validar que las horas sean un nÃºmero positivo // valida una condicion antes de continuar.
        res.status(400).json({ error: 'Las horas deben ser un nÃºmero positivo' }); // prepara una respuesta HTTP con un codigo de estado.
        return; // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
    if(Number.isNaN(minutos) || minutos < 0 || minutos > 59){ // Validar que los minutos sean un nÃºmero positivo y menor a 59 // valida una condicion antes de continuar.
        res.status(400).json({ error: 'Los minutos deben ser un nÃºmero positivo y menor a 60' }); // prepara una respuesta HTTP con un codigo de estado.
        return; // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
    const tarifa = tipo === "carro" ? 1200 : 500; // Definir el costo por hora segÃºn el tipo de vehÃ­culo // declara una variable o constante para guardar un dato.
    let h=Number(horas); // declara una variable o constante para guardar un dato.
    let m=Number(minutos); // declara una variable o constante para guardar un dato.
    if(m>5) h++; // Si los minutos son mayores a 5, se cobra una hora adicional // valida una condicion antes de continuar.
    const total = h * tarifa; // Calcular el costo total // declara una variable o constante para guardar un dato.
    res.json({ // envia datos en formato JSON al cliente.
        placa: placa, // parte de un controlador que procesa una peticion.
        tipo: tipo, // parte de un controlador que procesa una peticion.
        tarifa: tarifa, // parte de un controlador que procesa una peticion.
        tiempoUso: horas+":"+minutos, // parte de un controlador que procesa una peticion.
        horasCobradas: h, // parte de un controlador que procesa una peticion.
        total: total // parte de un controlador que procesa una peticion.
    }); // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
```
