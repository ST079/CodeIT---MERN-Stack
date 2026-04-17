import productModel from "../models/Product.js";

const getAllProducts = async (payload) => {
  const { category, brand, name, min, max, limit, offset, createdBy } = payload;
  const filters = {};
  const sort = payload.sort ? JSON.parse(payload.sort) : {};

  if (category) filters.category = category;
  if (brand) filters.brand = { $in: brand.split(",") };
  if (name) filters.name = { $regex: name, $options: "i" };
  if (min) filters.price = { $gte: min };
  if (max) filters.price = { ...filters.price, $lte: max };
  if (createdBy) filters.createdBy = createdBy;

  const productData = await productModel
    .find(filters)
    .sort(sort)
    .limit(limit ? parseInt(limit) : 0)
    .skip(offset ? parseInt(offset) : 0);

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

const createProduct = async (payload, userId) => {
  return await productModel.create({ ...payload, createdBy: userId });
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
