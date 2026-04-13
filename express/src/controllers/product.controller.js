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
    res
      .status(data.status)
      .json({ message: data.message, productDetails: data.data });
  } catch (err) {
    res.status(err.status || 400).send({ message: err?.message });
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

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body,
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(err.status || 400).send({ message: err?.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.json({ message: "Product Deleted Successfully", id: req.params.id });
  } catch (err) {
    res.status(err.status || 400).send({ message: err?.message });
  }
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
