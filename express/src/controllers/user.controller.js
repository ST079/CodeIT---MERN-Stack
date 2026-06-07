import userService from "../services/user.service.js";

const getAllUser = async (req, res, next) => {
  try {
    const users = await userService.getAllUser();

    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.getUserById(id);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const getLoggedInUser = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const user = await userService.getUserById(userId);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const payload = {
      data: req.body,
    };
    const newUser = await userService.createUser(payload);

    res.json({ message: "User Created Successfully.", userDetails: newUser });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const payload = req.body;
    const id = req.params.id;
    const updatedUser = await userService.updateUser(id, payload, req.user);

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const updateUserProfileImage = async (req, res, next) => {
  try {
    const id = req.user._id;
    const file = req.file;

    const updatedUser = await userService.updateUserProfileImage(id, file);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedUser = await userService.deleteUser(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
};

const updateUserRoles = async (req, res, next) => {
  try {
    const id = req.params.id;
    const roles = req.body.roles;

    const updatedUser = await userService.updateUserRole(id, roles);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export default {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  updateUserProfileImage,
  deleteUser,
  getLoggedInUser,
  updateUserRoles,
};
