import express from "express";
const router = express.Router();

import auth from "../middlewares/auth.js";
import checkRole from "../middlewares/checkRole.js";
import orderController from "../controllers/order.controller.js";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "../constants/roles.js";
import { orderSchema, orderStatusSchema } from "../libs/schemas/orderSchema.js";
import { validate } from "../middlewares/validate.js";

router.get("/", auth, checkRole(ROLE_ADMIN), orderController.getAllOrders);

router.get(
  "/my-orders",
  auth,
  checkRole(ROLE_USER),
  orderController.getOrdersByUser,
);

router.get(
  "/merchant",
  auth,
  checkRole(ROLE_MERCHANT),
  orderController.getOrdersByMerchant,
);

router.get("/:id", auth, checkRole(ROLE_USER), orderController.getOrderById);

router.post("/", auth, validate(orderSchema), orderController.createOrder);

router.put("/:id/cancel", auth, orderController.cancelOrder);

router.delete("/:id", auth, checkRole(ROLE_ADMIN), orderController.deleteOrder);

router.put(
  "/:id/status",
  checkRole(ROLE_ADMIN),
  validate(orderStatusSchema),
  orderController.updateOrderStatus,
);

router.post(
  "/:id/payment/khalti",
  checkRole(ROLE_USER),
  orderController.orderPaymentViaKhalti,
);

router.put(
  "/:id/confirm-payment",
  checkRole(ROLE_USER),
  orderController.confirmOrderPayment,
);

router.post(
  "/:id/payment/cash",
  checkRole(ROLE_USER),
  orderController.orderPaymentViaCash,
);

export default router;
