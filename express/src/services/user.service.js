import userModel from "../models/User.js";
import uploadFiles from "../utils/fileUploader.js";
import authService from "./auth.service.js";

// Not Required for now, will be used by admin to create user.
const createUser = async (payload) => {
  return await authService.register(payload);
};

const getAllUser = async () => {
  const { name, limit, offset } = query;

  const sort = query.sort ? JSON.parse(query.sort) : {};
  const filters = {};

  if (name) filters.name = { $regex: name, $options: "i" };
  return await userModel.find(filters).sort(sort).limit(limit).skip(offset);
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

const updateUser = async (id, payload, currentUser) => {
  await getUserById(id);

  // Check if the current user is the same as the user being updated or is an admin
  if (currentUser._id !== id && !currentUser.roles.includes(ROLE_ADMIN)) {
    throw {
      status: 403,
      message: "Forbidden: You don't have permission to update this user.",
    };
  }

  return await userModel.findByIdAndUpdate(
    id,
    {
      name: payload?.name,
      phone: payload?.phone,
      address: payload?.address,
      isActive: payload?.isActive,
    },
    { new: true },
  );
};

const updateUserProfileImage = async (id, file) => {
  await getUserById(id);

  const uploadedFile = await uploadFiles([file]);
  const imageUrl = uploadedFile[0].url;
  return await userModel.findByIdAndUpdate(
    id,
    { profileImageUrl: imageUrl },
    { new: true },
  );
};

const deleteUser = async (id) => {
  await getUserById(id);

  await userModel.findByIdAndDelete(id);
  return { status: 200, message: "User Deleted Successfully" };
};

const updateUserRoles = async (id, roles) => {
  await getUserById(id);

  return await userModel.findByIdAndUpdate(id, { roles }, { new: true });
};

export default {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  updateUserProfileImage,
  deleteUser,
  updateUserRoles,
};
