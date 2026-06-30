# backend\src\routes\parqueo.routes.js

```js
import {Router} from 'express'; // importa una dependencia o archivo que se usara aqui.
import { carcularCobro } from '../controllers/parqueo.controllers.js'; // Importar la funciÃ³n para calcular el cobro del parqueo desde el controlador // parte de rutas que conectan URL con controladores.
// se deja espacio para separar secciones del codigo.
const router = Router(); // Crear una instancia del enrutador de Express // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
router.post('/calcular', carcularCobro); // Definir la ruta POST para calcular el cobro del parqueo utilizando la funciÃ³n importada // define una ruta HTTP y llama su controlador.
// se deja espacio para separar secciones del codigo.
export default router; // Exportar el enrutador para ser utilizado en el archivo principal de la aplicaciÃ³n (app.js) // exporta el valor principal de este archivo.
```
