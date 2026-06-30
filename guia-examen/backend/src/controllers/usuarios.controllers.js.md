# backend\src\controllers\usuarios.controllers.js

```js
import bcrypt from "bcrypt"; // importa una dependencia o archivo que se usara aqui.
import pool from "../config/db.js"; // importa una dependencia o archivo que se usara aqui.
// se deja espacio para separar secciones del codigo.
// Expresiones regulares para validar correo y contrasena antes de guardar. // comentario escrito para explicar el codigo.
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // declara una variable o constante para guardar un dato.
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // declara una variable o constante para guardar un dato.
const saltRounds = 10; // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
// Permite recibir "contrasena" o "contraseÃ±a" desde Postman/frontend. // comentario escrito para explicar el codigo.
function obtenerContrasena(body) { // declara una funcion reutilizable.
    return body.contrasena ?? body.contraseÃ±a; // devuelve un valor y termina esta parte de la funcion.
} // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
// Valida que el parametro id sea un numero entero positivo. // comentario escrito para explicar el codigo.
function validarId(id) { // declara una funcion reutilizable.
    return Number.isInteger(Number(id)) && Number(id) > 0; // devuelve un valor y termina esta parte de la funcion.
} // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
// Centraliza las validaciones para agregar y modificar usuarios. // comentario escrito para explicar el codigo.
function validarDatosUsuario({ nombre, correo, contrasena, confirmacion }) { // declara una funcion reutilizable.
    if (!nombre || nombre.trim() === "") { // valida una condicion antes de continuar.
        return "El nombre es obligatorio"; // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    if (!correo || !correoRegex.test(correo)) { // valida una condicion antes de continuar.
        return "El formato del correo electronico no es valido"; // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    if (!contrasena || !passwordRegex.test(contrasena)) { // valida una condicion antes de continuar.
        return "La contrasena debe tener 8 caracteres, e incluir mayusculas, minusculas y numeros"; // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    if (confirmacion !== undefined && contrasena !== confirmacion) { // valida una condicion antes de continuar.
        return "La contrasena y la confirmacion no coinciden"; // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    return null; // devuelve un valor y termina esta parte de la funcion.
} // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
// Maneja errores comunes de MySQL y evita repetir el mismo catch en cada metodo. // comentario escrito para explicar el codigo.
function manejarErrorUsuario(error, res, mensaje) { // declara una funcion reutilizable.
    console.error(error); // parte de un controlador que procesa una peticion.
// se deja espacio para separar secciones del codigo.
    if (error.code === "ER_DUP_ENTRY") { // valida una condicion antes de continuar.
        return res.status(409).json({ // termina la funcion enviando una respuesta HTTP con codigo de estado.
            error: "El correo ya esta registrado" // parte de un controlador que procesa una peticion.
        }); // abre o cierra bloques de codigo.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    return res.status(500).json({ // termina la funcion enviando una respuesta HTTP con codigo de estado.
        error: `${mensaje}: ${error.sqlMessage || error.message}` // parte de un controlador que procesa una peticion.
    }); // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
export async function agregarUsuario(req, res) { // crea y exporta una funcion asincrona para usarla en rutas o componentes.
    const datos = { // declara una variable o constante para guardar un dato.
        nombre: req.body.nombre, // parte de un controlador que procesa una peticion.
        correo: req.body.correo, // parte de un controlador que procesa una peticion.
        contrasena: obtenerContrasena(req.body), // parte de un controlador que procesa una peticion.
        confirmacion: req.body.confirmacion // parte de un controlador que procesa una peticion.
    }; // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    // Si algun dato no cumple las reglas, se responde 400 y no se consulta la BD. // comentario escrito para explicar el codigo.
    const errorValidacion = validarDatosUsuario(datos); // declara una variable o constante para guardar un dato.
    if (errorValidacion) { // valida una condicion antes de continuar.
        return res.status(400).json({ error: errorValidacion }); // termina la funcion enviando una respuesta HTTP con codigo de estado.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    try { // intenta ejecutar codigo que puede fallar.
        // Se encripta la contrasena antes de guardarla en la base de datos. // comentario escrito para explicar el codigo.
        const contrasenaEncriptada = await bcrypt.hash(datos.contrasena, 10); // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
        // Inserta el usuario usando parametros para evitar inyeccion SQL. // comentario escrito para explicar el codigo.
        const [result] = await pool.execute( // guarda valores devueltos en forma de arreglo, por ejemplo una consulta o un hook.
            "INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)", // parte de un controlador que procesa una peticion.
            [datos.nombre.trim(), datos.correo.trim(), contrasenaEncriptada] // parte de un controlador que procesa una peticion.
        ); // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
        // Devuelve el id del usuario creado y un mensaje de exito. // comentario escrito para explicar el codigo.
        return res.status(201).json({ // termina la funcion enviando una respuesta HTTP con codigo de estado.
            id: result.insertId, // parte de un controlador que procesa una peticion.
            nombre: datos.nombre.trim(), // parte de un controlador que procesa una peticion.
            correo: datos.correo.trim(), // parte de un controlador que procesa una peticion.
            mensaje: "Usuario registrado correctamente" // parte de un controlador que procesa una peticion.
        }); // abre o cierra bloques de codigo.
    } catch (error) { // abre o cierra bloques de codigo.
        return manejarErrorUsuario(error, res, "Error al registrar el usuario"); // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
export async function obtenerUsuarios(req, res) { // crea y exporta una funcion asincrona para usarla en rutas o componentes.
    try { // intenta ejecutar codigo que puede fallar.
        // Devuelve todos los usuarios sin exponer la contrasena. // comentario escrito para explicar el codigo.
        const [usuarios] = await pool.execute( // guarda valores devueltos en forma de arreglo, por ejemplo una consulta o un hook.
            "SELECT id, nombre, correo FROM usuarios ORDER BY id" // parte de un controlador que procesa una peticion.
        ); // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
        return res.status(200).json(usuarios); // termina la funcion enviando una respuesta HTTP con codigo de estado.
    } catch (error) { // abre o cierra bloques de codigo.
        return manejarErrorUsuario(error, res, "Error al obtener los usuarios"); // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
export async function obtenerUsuarioPorId(req, res) { // crea y exporta una funcion asincrona para usarla en rutas o componentes.
    const { id } = req.params; // saca datos enviados por el cliente en la peticion.
// se deja espacio para separar secciones del codigo.
    if (!validarId(id)) { // valida una condicion antes de continuar.
        return res.status(400).json({ error: "El id debe ser un numero positivo" }); // termina la funcion enviando una respuesta HTTP con codigo de estado.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    try { // intenta ejecutar codigo que puede fallar.
        // Busca un solo usuario por id y no retorna la contrasena. // comentario escrito para explicar el codigo.
        const [usuarios] = await pool.execute( // guarda valores devueltos en forma de arreglo, por ejemplo una consulta o un hook.
            "SELECT id, nombre, correo FROM usuarios WHERE id = ?", // parte de un controlador que procesa una peticion.
            [id] // parte de un controlador que procesa una peticion.
        ); // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
        if (usuarios.length === 0) { // valida una condicion antes de continuar.
            return res.status(404).json({ error: "Usuario no encontrado" }); // termina la funcion enviando una respuesta HTTP con codigo de estado.
        } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
        return res.status(200).json(usuarios[0]); // termina la funcion enviando una respuesta HTTP con codigo de estado.
    } catch (error) { // abre o cierra bloques de codigo.
        return manejarErrorUsuario(error, res, "Error al obtener el usuario"); // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
export async function modificarUsuario(req, res) { // crea y exporta una funcion asincrona para usarla en rutas o componentes.
    const { id } = req.params; // saca datos enviados por el cliente en la peticion.
// se deja espacio para separar secciones del codigo.
    if (!validarId(id)) { // valida una condicion antes de continuar.
        return res.status(400).json({ error: "El id debe ser un numero positivo" }); // termina la funcion enviando una respuesta HTTP con codigo de estado.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    const datos = { // declara una variable o constante para guardar un dato.
        nombre: req.body.nombre, // parte de un controlador que procesa una peticion.
        correo: req.body.correo, // parte de un controlador que procesa una peticion.
        contrasena: obtenerContrasena(req.body), // parte de un controlador que procesa una peticion.
        confirmacion: req.body.confirmacion // parte de un controlador que procesa una peticion.
    }; // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    const errorValidacion = validarDatosUsuario(datos); // declara una variable o constante para guardar un dato.
    if (errorValidacion) { // valida una condicion antes de continuar.
        return res.status(400).json({ error: errorValidacion }); // termina la funcion enviando una respuesta HTTP con codigo de estado.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    try { // intenta ejecutar codigo que puede fallar.
        // Se vuelve a encriptar porque el usuario esta cambiando su contrasena. // comentario escrito para explicar el codigo.
        const contrasenaEncriptada = await bcrypt.hash(datos.contrasena, saltRounds); // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
        // Actualiza el usuario indicado por el id recibido en la URL. // comentario escrito para explicar el codigo.
        const [result] = await pool.execute( // guarda valores devueltos en forma de arreglo, por ejemplo una consulta o un hook.
            "UPDATE usuarios SET nombre = ?, correo = ?, contrasena = ? WHERE id = ?", // parte de un controlador que procesa una peticion.
            [datos.nombre.trim(), datos.correo.trim(), contrasenaEncriptada, id] // parte de un controlador que procesa una peticion.
        ); // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
        if (result.affectedRows === 0) { // valida una condicion antes de continuar.
            return res.status(404).json({ error: "Usuario no encontrado" }); // termina la funcion enviando una respuesta HTTP con codigo de estado.
        } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
        return res.status(200).json({ // termina la funcion enviando una respuesta HTTP con codigo de estado.
            id: Number(id), // parte de un controlador que procesa una peticion.
            nombre: datos.nombre.trim(), // parte de un controlador que procesa una peticion.
            correo: datos.correo.trim(), // parte de un controlador que procesa una peticion.
            mensaje: "Usuario modificado correctamente" // parte de un controlador que procesa una peticion.
        }); // abre o cierra bloques de codigo.
    } catch (error) { // abre o cierra bloques de codigo.
        return manejarErrorUsuario(error, res, "Error al modificar el usuario"); // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
export async function eliminarUsuario(req, res) { // crea y exporta una funcion asincrona para usarla en rutas o componentes.
    const { id } = req.params; // saca datos enviados por el cliente en la peticion.
// se deja espacio para separar secciones del codigo.
    if (!validarId(id)) { // valida una condicion antes de continuar.
        return res.status(400).json({ error: "El id debe ser un numero positivo" }); // termina la funcion enviando una respuesta HTTP con codigo de estado.
    } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    try { // intenta ejecutar codigo que puede fallar.
        // Elimina el registro que coincida con el id enviado en la URL. // comentario escrito para explicar el codigo.
        const [result] = await pool.execute("DELETE FROM usuarios WHERE id = ?", [id]); // guarda valores devueltos en forma de arreglo, por ejemplo una consulta o un hook.
// se deja espacio para separar secciones del codigo.
        if (result.affectedRows === 0) { // valida una condicion antes de continuar.
            return res.status(404).json({ error: "Usuario no encontrado" }); // termina la funcion enviando una respuesta HTTP con codigo de estado.
        } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
        return res.status(200).json({ // termina la funcion enviando una respuesta HTTP con codigo de estado.
            mensaje: "Usuario eliminado correctamente" // parte de un controlador que procesa una peticion.
        }); // abre o cierra bloques de codigo.
    } catch (error) { // abre o cierra bloques de codigo.
        return manejarErrorUsuario(error, res, "Error al eliminar el usuario"); // devuelve un valor y termina esta parte de la funcion.
    } // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
```
