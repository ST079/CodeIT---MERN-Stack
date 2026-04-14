import userModel from "../models/User.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.js";

const login = async (payload) => {
  const user = await userModel.findOne({
    $or: [{ email: payload?.email }, { phone: payload?.phone }],
  });
  if (!user) throw { status: 400, message: "User Not found" };
  const isValid = await comparePassword(payload.password, user.password);
  if (!isValid) throw { status: 400, message: "Invalid Credentials" };

  return user;
};

const register = async (payload) => {
  const user = await userModel.findOne({
    $or: [{ email: payload?.email }, { phone: payload?.phone }],
  });
  if (user) throw { status: 409, message: "User already exists" };

  payload.password = await hashPassword(payload.password);

  return await userModel.create(payload);
};

export default {
  register,
  login,
};
