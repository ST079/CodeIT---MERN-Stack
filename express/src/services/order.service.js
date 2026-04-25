import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
} from "../constants/orderStatuses.js";
import { ROLE_ADMIN } from "../constants/roles.js";
import orderModel from "../models/Order.js";
import paymentModel from "../models/Payment.js";
import crypto from "crypto";
import { payViaKhalti } from "../utils/payment.js";
import {
  PAYMENT_METHOD_COD,
  PAYMENT_METHOD_ONLINE,
} from "../constants/paymentMethods.js";
import {
  PAYMENT_STATUS_COMPLETED,
  PAYMENT_STATUS_FAILED,
  PAYMENT_STATUS_SUCCESS,
} from "../constants/paymentStatuses.js";

const getAllOrders = async () => {
  return await orderModel
    .find()
    .sort({ createdAt: -1 })
    .populate("user", "name email phone")
    .populate("orderItems.product", "name brand category price imageUrls");
};

const getOrdersByUser = async (userId) => {
  return await orderModel
    .find({ user: userId })
    .sort({ createdAt: -1 })
    .populate("user", "name email phone")
    .populate("orderItems.product", "name brand category price imageUrls");
};

const getOrderById = async (orderId) => {
  const order = await orderModel
    .findById(orderId)
    .populate("user", "name email phone roles")
    .populate("orderItems.product", "name brand category price imageUrls");

  if (!order)
    throw {
      status: 404,
      message: "Order Not Found! ",
    };

  return order;
};

const createOrder = async (payload, userId) => {
  const orderNumber = crypto.randomUUID();
  return await orderModel.create({
    ...payload,
    user: userId,
    orderNumber: orderNumber,
  });
};

const cancelOrder = async (orderId, user) => {
  const order = await getOrderById(orderId);
  if (!order.user.roles.includes(ROLE_ADMIN) && order.user._id != user._id)
    throw {
      status: 403,
      message: "Access Denied",
    };

  if (order.status === ORDER_STATUS_CANCELLED)
    throw {
      status: 400,
      message: "Order is already cancelled",
    };

  return await orderModel.findByIdAndUpdate(
    orderId,
    {
      status: ORDER_STATUS_CANCELLED,
    },
    { new: true },
  );
};

const deleteOrder = async (orderId) => {
  await getOrderById(orderId);
  return await orderModel.findByIdAndDelete(orderId);
};

const updateOrderStatus = async (orderId, status) => {
  const order = await getOrderById(orderId);
  if (order.status === ORDER_STATUS_CANCELLED)
    throw {
      status: 400,
      message: "Cannot update status of a cancelled order",
    };

  return await orderModel.findByIdAndUpdate(
    orderId,
    {
      status: status,
    },
    { new: true },
  );
};

const orderPaymentViaKhalti = async (orderId) => {
  const order = await getOrderById(orderId);

  const orderPayment = await paymentModel.create({
    method: PAYMENT_METHOD_ONLINE,
    amount: order.totalPrice,
  });

  await orderModel.findByIdAndUpdate(orderId, {
    payment: orderPayment._id,
  });

  return await payViaKhalti({
    amount: order.totalPrice, // Convert to paisa
    purchase_order_id: order.orderNumber,
    purchase_order_name: order.orderItems[0].product.name,
    customer_info: {
      name: order.user.name,
      email: order.user.email,
      phone: order.user.phone,
    },
  });
};

const orderPaymentViaCash = async (orderId) => {
  const order = await getOrderById(orderId);

  const orderPayment = await paymentModel.create({
    method: PAYMENT_METHOD_COD,
    amount: order.totalPrice,
  });

  return await orderModel.findByIdAndUpdate(
    orderId,
    {
      payment: orderPayment._id,
      status: ORDER_STATUS_CONFIRMED,
    },
    { returnDocument: "after" },
  );
};

const confirmOrderPayment = async (orderId, status) => {
  const order = await getOrderById(orderId);

  if (status.toUpperCase() !== PAYMENT_STATUS_COMPLETED) {
    await paymentModel.findByIdAndUpdate(order.payment, {
      status: PAYMENT_STATUS_FAILED,
    });
    throw {
      status: 404,
      message: "Payment failed.",
    };
  }

  await paymentModel.findByIdAndUpdate(order.payment, {
    status: PAYMENT_STATUS_SUCCESS,
  });

  return await orderModel.findByIdAndUpdate(
    orderId,
    {
      status: ORDER_STATUS_CONFIRMED,
    },
    { returnDocument: "after" },
  );
};

export default {
  getAllOrders,
  getOrdersByUser,
  getOrderById,
  createOrder,
  deleteOrder,
  cancelOrder,
  updateOrderStatus,
  orderPaymentViaKhalti,
  orderPaymentViaCash,
  confirmOrderPayment,
};
