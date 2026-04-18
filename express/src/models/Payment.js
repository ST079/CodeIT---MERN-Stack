import mongoose from "mongoose";
import {
  PAYMENT_METHOD_CARD,
  PAYMENT_METHOD_COD,
  PAYMENT_METHOD_ONLINE,
} from "../constants/paymentMethods.js";
import {
  PAYMENT_STATUS_PENDING,
  PAYMENT_STATUS_COMPLETED,
  PAYMENT_STATUS_FAILED,
  PAYMENT_STATUS_REFUNDED,
} from "../constants/paymentStatuses.js";

const paymentSchema = new mongoose.Schema({
  transactionId: String,
  method: {
    type: String,
    required: [true, "Payment method is required"],
    enum: [PAYMENT_METHOD_CARD, PAYMENT_METHOD_COD, PAYMENT_METHOD_ONLINE],
  },
  status: {
    type: String,
    required: [true, "Payment status is required"],
    default: PAYMENT_STATUS_PENDING,
    enum: [
      PAYMENT_STATUS_PENDING,
      PAYMENT_STATUS_COMPLETED,
      PAYMENT_STATUS_FAILED,
      PAYMENT_STATUS_REFUNDED,
    ],
  },
  amount: {
    type: Number,
    required: [true, "Payment amount is required"],
    min: [0, "Payment amount cannot be negative"],
  },
  createdAt: { type: Date, default: Date.now(), immutable: true },
});

const paymentModel = mongoose.model("Payment", paymentSchema);

export default paymentModel;
