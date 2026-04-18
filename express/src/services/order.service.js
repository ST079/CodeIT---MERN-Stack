import { ORDER_STATUS_CANCELLED } from "../constants/orderStatuses.js";
import { ROLE_ADMIN } from "../constants/roles.js";
import orderModel from "../models/Order.js";
import crypto from "crypto";

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

export default {
  getAllOrders,
  getOrdersByUser,
  getOrderById,
  createOrder,
  deleteOrder,
  cancelOrder,
  updateOrderStatus,
};
