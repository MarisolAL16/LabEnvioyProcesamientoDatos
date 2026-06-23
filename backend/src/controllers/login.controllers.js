import bcrypt from "bcrypt";
import pool from "../config/db.js";

const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Permite recibir "contrasena" o "contraseña" desde Postman/frontend.
function obtenerContrasena(body) {
    return body.contrasena ?? body.contraseña;
}

export async function loginUsuario(req, res) {
    const correo = req.body.correo;
    const contrasena = obtenerContrasena(req.body);

    // Valida que lleguen los datos necesarios antes de consultar la base.
    if (!correo || !correoRegex.test(correo)) {
        return res.status(400).json({
            error: "El formato del correo electronico no es valido"
        });
    }

    if (!contrasena) {
        return res.status(400).json({
            error: "La contrasena es obligatoria"
        });
    }

    try {
        // Busca el usuario por correo, incluyendo la contrasena encriptada para compararla.
        const [usuarios] = await pool.execute(
            "SELECT id, nombre, correo, contrasena FROM usuarios WHERE correo = ?",
            [correo.trim()]
        );

        if (usuarios.length === 0) {
            return res.status(401).json({
                error: "Correo o contrasena incorrectos"
            });
        }

        const usuario = usuarios[0];

        // Compara la contrasena escrita con el hash guardado en MySQL.
        const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);

        if (!contrasenaValida) {
            return res.status(401).json({
                error: "Correo o contrasena incorrectos"
            });
        }

        return res.status(200).json({
            id: usuario.id,
            nombre: usuario.nombre,
            correo: usuario.correo,
            mensaje: "Login exitoso"
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: `Error al iniciar sesion: ${error.sqlMessage || error.message}`
        });
    }
}
