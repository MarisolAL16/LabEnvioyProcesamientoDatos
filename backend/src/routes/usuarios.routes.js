import { Router } from "express";
import {
    agregarUsuario,
    eliminarUsuario,
    modificarUsuario,
    obtenerUsuarioPorId,
    obtenerUsuarios
} from "../controllers/usuarios.controllers.js";

const router = Router();

router.get("/", obtenerUsuarios);
router.get("/:id", obtenerUsuarioPorId);
router.post("/agregar", agregarUsuario);
router.put("/:id", modificarUsuario);
router.delete("/:id", eliminarUsuario);

export default router;
