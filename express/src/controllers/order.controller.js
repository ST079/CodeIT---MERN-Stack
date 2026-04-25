import { error } from "console";
import orderService from "../services/order.service.js";

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

const getOrdersByUser = async (req, res, next) => {
  try {
    const orders = await orderService.getOrdersByUser(req.user._id);
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    res.json(order);
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req, res, next) => {
  try {
    const order = await orderService.createOrder(req.body, req.user._id);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

const cancelOrder = async (req, res, next) => {
  try {
    const order = await orderService.cancelOrder(req.params.id, req.user);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const order = await orderService.deleteOrder(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

const updateOrderStatus = async (req, res, next) => {
  try {
    const order = await orderService.updateOrderStatus(
      req.params.id,
      req.body.status,
    );
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

const orderPaymentViaKhalti = async (req, res, next) => {
  try {
    const order = await orderService.orderPaymentViaKhalti(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

const orderPaymentViaCash = async (req, res, next) => {
  try {
    const order = await orderService.orderPaymentViaCash(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

const confirmOrderPayment = async (req, res, next) => {
  if (!req.body?.status)
    return res.status(400).json({ message: "Payment Status is required." });
  try {
    const order = await orderService.confirmOrderPayment(
      req.params.id,
      req.body.status,
    );
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export default {
  getAllOrders,
  getOrdersByUser,
  getOrderById,
  createOrder,
  cancelOrder,
  deleteOrder,
  updateOrderStatus,
  orderPaymentViaKhalti,
  orderPaymentViaCash,
  confirmOrderPayment,
};
