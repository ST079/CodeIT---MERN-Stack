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

const getOrderById = async (req, res, next) => {};

const createOrder = async (req, res, next) => {
  try {
    const order = await orderService.createOrder(req.body, req.user._id);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

const cancelOrder = async (req, res, next) => {};

const deleteOrder = async (req, res, next) => {};


export default {
  getAllOrders,
  getOrdersByUser,
  createOrder,

};
