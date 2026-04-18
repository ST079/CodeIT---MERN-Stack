import express from "express";
const router = express.Router();

import orderController from "../controllers/order.controller.js";
import auth from "../middlewares/auth.js";
import { orderSchema } from "../libs/schemas/orderSchema.js";
import { validate } from "../middlewares/validate.js";
import checkRole from "../middlewares/checkRole.js";
import { ROLE_ADMIN, ROLE_USER } from "../constants/roles.js";

router.get("/", auth, checkRole(ROLE_ADMIN), orderController.getAllOrders);

router.get("/my-orders", auth, checkRole(ROLE_USER), orderController.getOrdersByUser);

router.post("/", auth, validate(orderSchema), orderController.createOrder);

export default router;
