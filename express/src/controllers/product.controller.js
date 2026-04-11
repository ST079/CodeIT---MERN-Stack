import productService from "../services/product.service.js";

const getAllProducts = (req, res) => {
  const playload = req.query;
  const data = productService.getAllProducts(playload);
  res.json(data);
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const data = productService.getProductById(id);
  if (!data) res.status(404).json({ message: "Product not found" });
  res.json(data);
};

const createProduct = (req, res) => {
  const data = req.body;
  productService.createProduct(data);
  res.status(201).json({ message: "Product created successfully" });
};
export default {
  getAllProducts,
  getProductById,
  createProduct,
};
