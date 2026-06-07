import dotenv from "dotenv";
dotenv.config();

import express from "express";
import multer from "multer";
import connectCloudinary from "./config/cloudinary.js";
import config from "./config/config.js";

import { ROLE_ADMIN } from "./constants/roles.js";
import auth from "./middlewares/auth.js";
import authRoutes from "./routes/auth.route.js";
import bodyParser from "body-parser";
import checkRole from "./middlewares/checkRole.js";
import connectDB from "./config/database.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import logger from "./middlewares/logger.js";
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";
import orderRoutes from "./routes/order.route.js";
import uploadFile from "./utils/fileUploader.js";

//aaba yo aap le sabai kaam garnu milxa express ma,
// server banaune, route haru define garne, middleware haru use garne, etc.
const app = express();
// const upload = multer({ dest: "uploads/" });
const upload = multer({ storage: multer.memoryStorage() }); //temp storage in ram to get buffer.


app.get("/", (req, res) => {
  res.send({
    name: config.name,
    version: config.version,
    featureAdminEnabled: config.feature.admin.enabled,
  });
});

connectDB();
connectCloudinary();

app.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;
  console.log("Received file:", file);

  uploadFile(file);

  res.send({ message: "File received and uploaded successfully." });
});

app.use(bodyParser.json());
app.use(logger);

app.use(process.env.VERSION + "/products", productRoutes);
app.use(
  process.env.VERSION + "/users",
  auth,
  checkRole(ROLE_ADMIN),
  userRoutes,
);
app.use(process.env.VERSION + "/auth", authRoutes);
app.use(process.env.VERSION + "/orders", orderRoutes);

app.use(errorMiddleware);
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}....`);
});
