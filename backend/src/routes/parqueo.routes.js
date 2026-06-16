import {Router} from 'express';
import { carcularCobro } from '../controllers/parqueo.controllers.js'; // Importar la función para calcular el cobro del parqueo desde el controlador

const router = Router(); // Crear una instancia del enrutador de Express

router.post('/calcular', carcularCobro); // Definir la ruta POST para calcular el cobro del parqueo utilizando la función importada

export default router; // Exportar el enrutador para ser utilizado en el archivo principal de la aplicación (app.js)