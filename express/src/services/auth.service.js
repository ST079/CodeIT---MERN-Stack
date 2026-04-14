import userModel from "../models/User.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.js";

const login = () => {};

const register = async (payload) => {
  if (!payload)
    throw { status: 400, message: "Something Went Wrong in Register Service" };
  const user = await userModel.findOne({ email: payload.email });
  if (user) throw { status: 400, message: "User already exists" };

  payload.password = await hashPassword(payload.password);

  return await userModel.create(payload);
};

export default {
  register,
  login,
};
