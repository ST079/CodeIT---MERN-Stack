import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    const status = await mongoose.connect(config.databaseURL);
    console.log(`Database Connected: ${status.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
