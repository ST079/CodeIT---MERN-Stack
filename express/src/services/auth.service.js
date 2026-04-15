import userModel from "../models/User.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.js";

const login = async (payload) => {
  const user = await userModel.findOne({
    $or: [{ email: payload?.email }, { phone: payload?.phone }],
  });
  if (!user) throw { status: 400, message: "User Not found" };
  const isValidPassword = await comparePassword(
    payload.password,
    user.password,
  );
  if (!isValidPassword) throw { status: 400, message: "Invalid Credentials" };

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    address: user.address,
    roles: user.roles,
    phone: user.phone,
    isActive: user.isActive,
  };
};

const register = async (payload) => {
  const user = await userModel.findOne({
    $or: [{ email: payload?.email }, { phone: payload?.phone }],
  });
  if (user) throw { status: 409, message: "User already exists" };

  payload.password = await hashPassword(payload.password);

  const newUser = await userModel.create(payload);
  return {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    address: newUser.address,
    roles: newUser.roles,
    phone: newUser.phone,
    isActive: newUser.isActive,
  };
};

export default {
  register,
  login,
};
