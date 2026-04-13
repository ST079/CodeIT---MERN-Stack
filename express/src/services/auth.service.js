import userModel from "../models/User.js";

const login = () => {};

const register = async (playload) => {
  const user = await userModel.findOne({ email: playload.email });
  if (user) throw { status: 400, message: "User already exists" };
  return await userModel.create(playload);
};

export default {
  register,
  login,
};
