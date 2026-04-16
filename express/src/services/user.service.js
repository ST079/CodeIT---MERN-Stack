import userModel from "../models/User.js";

const createUser = async (playload) => {
  return await userModel.create(playload.data);
};

const getAllUser = async () => {
  return await userModel.find();
};

const getUserById = async (id) => {
  const data = await userModel.findById(id);
  if (!data)
    throw {
      status: 404,
      message: "User Not Found! ",
    };
  return { data: data, status: 200, message: "User Found" };
};

const updateUser = async (id, payload) => {
  await getUserById(id);
  return await userModel.findByIdAndUpdate(id, payload, { new: true })
};



export default {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
};
