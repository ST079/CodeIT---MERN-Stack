const config = {
  name: process.env.NAME || "",
  port: process.env.PORT || 5000,
  version: process.env.VERSION || "/api/v1",
  databaseURL: process.env.DBURL || "mongodb://localhost:27017/express-api",
  feature: {
    admin: {
      enabled: parseInt(process.env.FEATURE_ADMIN_ENABLED) || false,
    },
  },
};

export default config;
