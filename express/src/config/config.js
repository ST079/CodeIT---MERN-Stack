import dotenv from "dotenv";
dotenv.config();

const config = {
  name: process.env.NAME || "",
  port: process.env.PORT || 5000,
  version: process.env.VERSION || "/api/v1",
  databaseURL: process.env.DBURL || "mongodb://localhost:27017/express-api",
  salt_round: process.env.SALT_ROUND || "",
  jwt_secret: process.env.JWT_SECRET || "",
  feature: {
    admin: {
      enabled: parseInt(process.env.FEATURE_ADMIN_ENABLED) || false,
    },
  },
  khalit: {
    api_url: process.env.KHALTI_API_URL || "",
    api_key: process.env.KHALTI_API_KEY || "",
  },
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
    api_key: process.env.CLOUDINARY_API_KEY || "",
    api_secret: process.env.CLOUDINARY_API_SECRET || "",
  },
};

export default config;
