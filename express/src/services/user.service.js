import userModel from "../models/User.js";

const createUser = async (playload) => {
  return await userModel.create(playload.data);
};

const getAllUser = async (playload) => {};

export default {
  createUser,
};
