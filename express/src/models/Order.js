import mongoose from "mongoose";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "../constants/orderStatuses.js";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Order must belong to a user"],
  },
  status: {
    type: String,
    default: ORDER_STATUS_PENDING,
    enum: [
      ORDER_STATUS_PENDING,
      ORDER_STATUS_CANCELLED,
      ORDER_STATUS_CONFIRMED,
      ORDER_STATUS_DELIVERED,
      ORDER_STATUS_SHIPPED,
    ],
  },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: [true, "Product is required"],
      },
      quantity: {
        type: Number,
        default: 1,
        min: [1, "Quantity must be 1 or greater."],
      },
    },
  ],
  shippingAddress: {
    country: {
      type: String,
      required: true,
      default: "Nepal",
    },
    street: {
      type: String,
      required: [true, "Shipping address street is required"],
    },
    city: {
      type: String,
      required: [true, "Shipping address city is required"],
    },
    province: String,
  },
  totalPrice: {
    type: Number,
    required: [true, "Total price is required"],
  },
  createdAt: { type: Date, default: Date.now(), immutable: true },
  orderNumber: {
    type: String,
    required: [true, "Order number is required"],
  },
  payment: {
    type: mongoose.Schema.ObjectId,
    ref: "Payment",
  },
});

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
