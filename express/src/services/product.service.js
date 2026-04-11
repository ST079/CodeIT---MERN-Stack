import fs from "fs";

const products = fs.readFileSync("src/data/products.json", "utf-8");
const productData = JSON.parse(products);

const getAllProducts = (playload) => {
  const query = playload;
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

const getProductById = (id) => {
  return productData.find((product) => product.id === id);
};

const createProduct = (data) => {
  productData.push(data);
  fs.writeFileSync(
    "src/data/products.json",
    JSON.stringify(productData, null, 2),
  );
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
};
