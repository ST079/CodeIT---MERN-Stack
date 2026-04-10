import fs from "fs";

const products = fs.readFileSync("src/data/products.json", "utf-8");
const data = JSON.parse(products);

const getAllProducts = () => {
  return data;
};

const getProductById = (id) => {
  return data.find((product) => product.id === id);
};

export default {
  getAllProducts,
  getProductById,
};
