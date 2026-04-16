import userModel from "../models/User.js";

const createUser = async (playload) => {
  return await userModel.create(playload.data);
};

const getAllUser = async () => {
  return await userModel.find();
};

const getUserById = async (id)=>{
  return await userModel.findById(id);
}

const updateUser = async (id)=>{

}


export default {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
};
