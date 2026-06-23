import bcrypt from "bcrypt";
import pool from "../config/db.js";

// Expresiones regulares para validar correo y contrasena antes de guardar.
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const saltRounds = 10;

// Permite recibir "contrasena" o "contraseña" desde Postman/frontend.
function obtenerContrasena(body) {
    return body.contrasena ?? body.contraseña;
}

// Valida que el parametro id sea un numero entero positivo.
function validarId(id) {
    return Number.isInteger(Number(id)) && Number(id) > 0;
}

// Centraliza las validaciones para agregar y modificar usuarios.
function validarDatosUsuario({ nombre, correo, contrasena, confirmacion }) {
    if (!nombre || nombre.trim() === "") {
        return "El nombre es obligatorio";
    }

    if (!correo || !correoRegex.test(correo)) {
        return "El formato del correo electronico no es valido";
    }

    if (!contrasena || !passwordRegex.test(contrasena)) {
        return "La contrasena debe tener 8 caracteres, e incluir mayusculas, minusculas y numeros";
    }

    if (confirmacion !== undefined && contrasena !== confirmacion) {
        return "La contrasena y la confirmacion no coinciden";
    }

    return null;
}

// Maneja errores comunes de MySQL y evita repetir el mismo catch en cada metodo.
function manejarErrorUsuario(error, res, mensaje) {
    console.error(error);

    if (error.code === "ER_DUP_ENTRY") {
        return res.status(409).json({
            error: "El correo ya esta registrado"
        });
    }

    return res.status(500).json({
        error: `${mensaje}: ${error.sqlMessage || error.message}`
    });
}

export async function agregarUsuario(req, res) {
    const datos = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasena: obtenerContrasena(req.body),
        confirmacion: req.body.confirmacion
    };

    // Si algun dato no cumple las reglas, se responde 400 y no se consulta la BD.
    const errorValidacion = validarDatosUsuario(datos);
    if (errorValidacion) {
        return res.status(400).json({ error: errorValidacion });
    }

    try {
        // Se encripta la contrasena antes de guardarla en la base de datos.
        const contrasenaEncriptada = await bcrypt.hash(datos.contrasena, 10);

        // Inserta el usuario usando parametros para evitar inyeccion SQL.
        const [result] = await pool.execute(
            "INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)",
            [datos.nombre.trim(), datos.correo.trim(), contrasenaEncriptada]
        );

        // Devuelve el id del usuario creado y un mensaje de exito.
        return res.status(201).json({
            id: result.insertId,
            nombre: datos.nombre.trim(),
            correo: datos.correo.trim(),
            mensaje: "Usuario registrado correctamente"
        });
    } catch (error) {
        return manejarErrorUsuario(error, res, "Error al registrar el usuario");
    }
}

export async function obtenerUsuarios(req, res) {
    try {
        // Devuelve todos los usuarios sin exponer la contrasena.
        const [usuarios] = await pool.execute(
            "SELECT id, nombre, correo FROM usuarios ORDER BY id"
        );

        return res.status(200).json(usuarios);
    } catch (error) {
        return manejarErrorUsuario(error, res, "Error al obtener los usuarios");
    }
}

export async function obtenerUsuarioPorId(req, res) {
    const { id } = req.params;

    if (!validarId(id)) {
        return res.status(400).json({ error: "El id debe ser un numero positivo" });
    }

    try {
        // Busca un solo usuario por id y no retorna la contrasena.
        const [usuarios] = await pool.execute(
            "SELECT id, nombre, correo FROM usuarios WHERE id = ?",
            [id]
        );

        if (usuarios.length === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        return res.status(200).json(usuarios[0]);
    } catch (error) {
        return manejarErrorUsuario(error, res, "Error al obtener el usuario");
    }
}

export async function modificarUsuario(req, res) {
    const { id } = req.params;

    if (!validarId(id)) {
        return res.status(400).json({ error: "El id debe ser un numero positivo" });
    }

    const datos = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasena: obtenerContrasena(req.body),
        confirmacion: req.body.confirmacion
    };

    const errorValidacion = validarDatosUsuario(datos);
    if (errorValidacion) {
        return res.status(400).json({ error: errorValidacion });
    }

    try {
        // Se vuelve a encriptar porque el usuario esta cambiando su contrasena.
        const contrasenaEncriptada = await bcrypt.hash(datos.contrasena, saltRounds);

        // Actualiza el usuario indicado por el id recibido en la URL.
        const [result] = await pool.execute(
            "UPDATE usuarios SET nombre = ?, correo = ?, contrasena = ? WHERE id = ?",
            [datos.nombre.trim(), datos.correo.trim(), contrasenaEncriptada, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        return res.status(200).json({
            id: Number(id),
            nombre: datos.nombre.trim(),
            correo: datos.correo.trim(),
            mensaje: "Usuario modificado correctamente"
        });
    } catch (error) {
        return manejarErrorUsuario(error, res, "Error al modificar el usuario");
    }
}

export async function eliminarUsuario(req, res) {
    const { id } = req.params;

    if (!validarId(id)) {
        return res.status(400).json({ error: "El id debe ser un numero positivo" });
    }

    try {
        // Elimina el registro que coincida con el id enviado en la URL.
        const [result] = await pool.execute("DELETE FROM usuarios WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        return res.status(200).json({
            mensaje: "Usuario eliminado correctamente"
        });
    } catch (error) {
        return manejarErrorUsuario(error, res, "Error al eliminar el usuario");
    }
}
