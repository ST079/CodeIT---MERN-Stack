import productModel from "../models/Product.js";

const getAllProducts = async (playload) => {
  const query = playload;
  const productData = await productModel.find();
  if (query) {
    const filteredData = productData.filter((product) => {
      return query.brand
        ? product.brand.toLowerCase() === query.brand.toLowerCase()
        : true;
    });
    return filteredData;
  }
  return productData;
};

const getProductById = async (id) => {
  return await productModel.findById(id);
};

const createProduct = async (data) => {
  return await productModel.create(data);
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
};
