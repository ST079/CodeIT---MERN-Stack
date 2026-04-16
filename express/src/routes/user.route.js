import express from "express";
import userController from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";
import { userSchema } from "../libs/schemas/user.schema.js";
const router = express.Router();

/**
 * GET /api/v1/users/
 */

router.get("/", userController.getAllUser);

/**
 * GET /api/v1/users/:id
 */

router.get("/:id", userController.getUserById);

/**
 * Post /api/v1/users/
 */
router.post("/", validate(userSchema), userController.createUser);

/**
 * Put /api/v1/users/:id
 */
router.put("/:id", userController.updateUser);

export default router;
