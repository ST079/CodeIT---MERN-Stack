import productService from "../services/product.service.js";

const getAllProducts = (req, res) => {
  const data = productService.getAllProducts();
  res.json(data);
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const data = productService.getProductById(id);
  res.json(data);
};

export default {
  getAllProducts,
  getProductById,
};
