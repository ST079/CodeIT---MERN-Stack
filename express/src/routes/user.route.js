import express from "express";
import userController from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";
import { userSchema } from "../libs/schemas/user.schema.js";
import checkRole from "../middlewares/checkRole.js";
import { ROLE_ADMIN } from "../constants/roles.js";
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
router.post(
  "/",
  checkRole(ROLE_ADMIN),
  validate(userSchema),
  userController.createUser,
);

/**
 * Put /api/v1/users/:id
 */
router.put("/:id", checkRole(ROLE_ADMIN), userController.updateUser);

/**
 * Patch /api/v1/users/profile-image
 */
router.patch("/profile-image", userController.updateUserProfileImage);

export default router;
