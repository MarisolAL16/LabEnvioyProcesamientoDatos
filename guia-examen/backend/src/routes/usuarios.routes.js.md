# backend\src\routes\usuarios.routes.js

```js
import { Router } from "express"; // importa una dependencia o archivo que se usara aqui.
import { // parte de rutas que conectan URL con controladores.
    agregarUsuario, // parte de rutas que conectan URL con controladores.
    eliminarUsuario, // parte de rutas que conectan URL con controladores.
    modificarUsuario, // parte de rutas que conectan URL con controladores.
    obtenerUsuarioPorId, // parte de rutas que conectan URL con controladores.
    obtenerUsuarios // parte de rutas que conectan URL con controladores.
} from "../controllers/usuarios.controllers.js"; // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
const router = Router(); // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
router.get("/", obtenerUsuarios); // define una ruta HTTP y llama su controlador.
router.get("/:id", obtenerUsuarioPorId); // define una ruta HTTP y llama su controlador.
router.post("/agregar", agregarUsuario); // define una ruta HTTP y llama su controlador.
router.put("/:id", modificarUsuario); // define una ruta HTTP y llama su controlador.
router.delete("/:id", eliminarUsuario); // define una ruta HTTP y llama su controlador.
// se deja espacio para separar secciones del codigo.
export default router; // exporta el valor principal de este archivo.
```
