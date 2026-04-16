import express from "express";
import productControllers from "../controllers/product.controller.js";
import auth from "../middlewares/auth.js";
import checkRole from "../middlewares/checkRole.js";
import { ROLE_ADMIN } from "../constants/roles.js";
const router = express.Router();

/**
 * GET /api/v1/products/
 */
router.get("/", productControllers.getAllProducts);

/**
 * GET /api/v1/products/:id
 */
router.get("/:id", productControllers.getProductById);

/**
 * Post /api/v1/products/
 */
router.post("/", auth, checkRole(ROLE_ADMIN), productControllers.createProduct);

/**
 * Put /api/v1/products/:id
 */
router.put("/:id", auth, productControllers.updateProduct);

/**
 * Delete /api/v1/products/:id
 */

router.delete("/:id", auth, productControllers.deleteProduct);

export default router;
