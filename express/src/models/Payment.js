import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  transactionId: String,
  createdAt: { type: Date, default: Date.now(), immutable: true },
});

const paymentModel = mongoose.model("Payment", paymentSchema);

export default paymentModel;
