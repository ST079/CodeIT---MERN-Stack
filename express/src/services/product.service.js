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
  const data = await productModel.findById(id);
  if (!data)
    throw {
      status: 404,
      message: "Product Not Found! ",
    };
  return { data: data, status: 200, message: "Product Found" };
};

const createProduct = async (payload) => {
  return await productModel.create(payload);
};

const updateProduct = async (id, payload) => {
  await getProductById(id);
  //{new:true}-> gives the latest updated payload
  return await productModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteProduct = async (id) => {
  await getProductById(id);
  await productModel.findByIdAndDelete(id);
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
