# backend\src\controllers\login.controllers.js

```js
import bcrypt from "bcrypt"; // importa una dependencia o archivo que se usara aqui.
import pool from "../config/db.js"; // importa una dependencia o archivo que se usara aqui.
// se deja espacio para separar secciones del codigo.
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
// Permite recibir "contrasena" o "contraseÃ±a" desde Postman/frontend. // comentario escrito para explicar el codigo.
function obtenerContrasena(body) { // declara una funcion reutilizable.
    return body.contrasena ?? body.contraseÃ±a; // devuelve un valor y termina esta parte de la funcion.
} // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
export async function loginUsuario(req, res) { // crea y exporta una funcion asincrona para usarla en rutas o componentes.
    const correo = req.body.correo; // declara una variable o constante para guardar un dato.
    const contrasena = obtenerContrasena(req.body); // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
    // Valida que lleguen los datos necesarios antes de consultar la base. // comentario escrito para explicar el codigo.
    if (!correo || !correoRegex.test(correo)) { // valida una condicion antes de continuar.
        return res.status(400).json({ // termina la funcion enviando una respuesta HTTP con codigo de estado.
            error: "El formato del correo electronico no es valido" // parte de un controlador que procesa una peticion.
        }); // abre o cierra bloques de codigo.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    if (!contrasena) { // valida una condicion antes de continuar.
        return res.status(400).json({ // termina la funcion enviando una respuesta HTTP con codigo de estado.
            error: "La contrasena es obligatoria" // parte de un controlador que procesa una peticion.
        }); // abre o cierra bloques de codigo.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    try { // intenta ejecutar codigo que puede fallar.
        // Busca el usuario por correo, incluyendo la contrasena encriptada para compararla. // comentario escrito para explicar el codigo.
        const [usuarios] = await pool.execute( // guarda valores devueltos en forma de arreglo, por ejemplo una consulta o un hook.
            "SELECT id, nombre, correo, contrasena FROM usuarios WHERE correo = ?", // parte de un controlador que procesa una peticion.
            [correo.trim()] // parte de un controlador que procesa una peticion.
        ); // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
        if (usuarios.length === 0) { // valida una condicion antes de continuar.
            return res.status(401).json({ // termina la funcion enviando una respuesta HTTP con codigo de estado.
                error: "Correo o contrasena incorrectos" // parte de un controlador que procesa una peticion.
            }); // abre o cierra bloques de codigo.
        } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
        const usuario = usuarios[0]; // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
        // Compara la contrasena escrita con el hash guardado en MySQL. // comentario escrito para explicar el codigo.
        const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena); // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
        if (!contrasenaValida) { // valida una condicion antes de continuar.
            return res.status(401).json({ // termina la funcion enviando una respuesta HTTP con codigo de estado.
                error: "Correo o contrasena incorrectos" // parte de un controlador que procesa una peticion.
            }); // abre o cierra bloques de codigo.
        } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
        return res.status(200).json({ // termina la funcion enviando una respuesta HTTP con codigo de estado.
            id: usuario.id, // parte de un controlador que procesa una peticion.
            nombre: usuario.nombre, // parte de un controlador que procesa una peticion.
            correo: usuario.correo, // parte de un controlador que procesa una peticion.
            mensaje: "Login exitoso" // parte de un controlador que procesa una peticion.
        }); // abre o cierra bloques de codigo.
    } catch (error) { // abre o cierra bloques de codigo.
        console.error(error); // parte de un controlador que procesa una peticion.
// se deja espacio para separar secciones del codigo.
        return res.status(500).json({ // termina la funcion enviando una respuesta HTTP con codigo de estado.
            error: `Error al iniciar sesion: ${error.sqlMessage || error.message}` // parte de un controlador que procesa una peticion.
        }); // abre o cierra bloques de codigo.
    } // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
```
