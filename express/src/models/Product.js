import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product Name is Required!!!!!"],
    minlength: [3, "Invalid!!! Name must be more than 3 characters."],
  },
  description: String,
  brand: String,
  category: String,
  price: {
    type: Number,
    required: [true, "Product Price is Required!!!!!!"],
    min: [, "Price must be grater than 1."],
  },
  stock: { type: Number, default: 1 },
  imageUrls: [String],
  createdAt: { type: Date, default: Date.now() },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Product must have a creator!"],
  },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
