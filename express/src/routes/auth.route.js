import express from "express";
import authController from "../controllers/auth.controller.js";
import { loginSchema, registerSchema } from "../libs/schemas/authSchema.js";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.post("/login", validate(loginSchema), authController.login);

router.post("/register", validate(registerSchema), authController.register);

export default router;
