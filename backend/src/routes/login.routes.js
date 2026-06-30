import { Router } from "express";
import { loginUsuario } from "../controllers/login.controllers.js";

const router = Router();

router.post("/", loginUsuario);

export default router;
