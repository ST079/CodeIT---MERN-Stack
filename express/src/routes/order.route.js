import express from "express";
const router = express.Router();

import auth from "../middlewares/auth.js";
import checkRole from "../middlewares/checkRole.js";
import orderController from "../controllers/order.controller.js";
import { ROLE_ADMIN, ROLE_USER } from "../constants/roles.js";
import { orderSchema } from "../libs/schemas/orderSchema.js";
import { validate } from "../middlewares/validate.js";

router.get("/", auth, checkRole(ROLE_ADMIN), orderController.getAllOrders);

router.get(
  "/my-orders",
  auth,
  checkRole(ROLE_USER),
  orderController.getOrdersByUser,
);

router.get("/:id", auth, checkRole(ROLE_USER), orderController.getOrderById);

router.post("/", auth, validate(orderSchema), orderController.createOrder);

router.put("/:id/cancel", auth, orderController.cancelOrder);

router.delete("/:id", auth, checkRole(ROLE_ADMIN), orderController.deleteOrder);

export default router;
