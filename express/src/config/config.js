import dotenv from "dotenv";
dotenv.config();

const config = {
  name: process.env.NAME || "",
  port: process.env.PORT || 5000,
  app_url: process.env.APP_URL || "http://localhost:5000",
  version: process.env.VERSION || "/api/v1",
  databaseURL: process.env.DBURL,
  salt_round: process.env.SALT_ROUND || "",
  jwt_secret: process.env.JWT_SECRET || "",
  feature: {
    admin: {
      enabled: parseInt(process.env.FEATURE_ADMIN_ENABLED) || false,
    },
  },
  khalti: {
    api_url: process.env.KHALTI_API_URL || "",
    api_key: process.env.KHALTI_API_KEY || "",
  },
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
    api_key: process.env.CLOUDINARY_API_KEY || "",
    api_secret: process.env.CLOUDINARY_API_SECRET || "",
  },
  emailApiKey: process.env.EMAIL_API_KEY || "",
};

export default config;
