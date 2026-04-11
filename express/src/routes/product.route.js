import express from "express";
import productControllers from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", productControllers.getAllProducts);

router.get("/:id", productControllers.getProductById);

router.post("/", productControllers.createProduct);

export default router;
