import productService from "../services/product.service.js";

const getAllProducts = async (req, res) => {
  try {
    const playload = req.query;
    const data = await productService.getAllProducts(playload);
    res.json(data);
  } catch (err) {
    res.status(400).send({ message: err?.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const data = await productService.getProductById(req.params.id);
    if (!data) res.status(404).json({ message: "Product not found" });
    res.json(data);
  } catch (err) {
    res.status(400).send({ message: err?.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const createdProduct = await productService.createProduct(req.body);
    res.status(201).json(createdProduct);
  } catch (err) {
    res.status(400).send({ message: err?.message });
  }
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
};
