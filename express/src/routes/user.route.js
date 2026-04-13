import express from 'express';
import userController from '../controllers/user.controller.js';
const router = express.Router();

/**
 * Get /api/v1/users/
 */

router.get("/", userController.createUser);


export default router;