import productService from "../services/product.service.js";

const getAllProducts = async (req, res, next) => {
  try {
    const payload = req.query;
    const data = await productService.getAllProducts(payload);
    res.json(data);
  } catch (error) {
    // res.status(400).send({ message: error?.message });
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const data = await productService.getProductById(req.params.id);
    res
      .status(data.status)
      .json({ message: data.message, productDetails: data.data });
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const createdProduct = await productService.createProduct(req.body);
    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body,
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.json({ message: "Product Deleted Successfully", id: req.params.id });
  } catch (err) {
    next(error);
  }
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
