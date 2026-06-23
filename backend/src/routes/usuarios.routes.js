import { Router } from "express";
import { agregarUsuario } from "../controllers/usuarios.controllers.js";

const router = Router();

router.post("/agregar", agregarUsuario);

export default router;