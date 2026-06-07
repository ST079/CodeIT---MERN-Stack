import express from "express";
import userController from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";
import { updateRolesSchema, userSchema } from "../libs/schemas/user.schema.js";
import checkRole from "../middlewares/checkRole.js";
import { ROLE_ADMIN } from "../constants/roles.js";
import { check } from "zod";
const router = express.Router();

/**
 * GET /api/v1/users/
 */

router.get("/", checkRole(ROLE_ADMIN), userController.getAllUser);

/**
 * GET /api/v1/users/me
 */

router.get("/me", userController.getLoggedInUser);

/**
 * GET /api/v1/users/:id
 */

router.get("/:id", checkRole(ROLE_ADMIN), userController.getUserById);

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
 * Put /api/v1/users/update-profile
 */
router.put("/update-profile", userController.updateUser);

/**
 * Patch /api/v1/users/profile-image
 */
router.patch("/profile-image", userController.updateUserProfileImage);

/**
 * Delete /api/v1/users/:id
 */
router.delete("/:id", checkRole(ROLE_ADMIN), userController.deleteUser);

/**
 * Patch /api/v1/users/:id/roles
 */
router.patch("/:id/roles", checkRole(ROLE_ADMIN), validate(updateRolesSchema), userController.updateUserRoles);

export default router;
