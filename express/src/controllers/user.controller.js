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

const createUser = async (req, res) => {
  try {
    const playload = {
      data: req.body,
    };
    const newUser = await userService.createUser(playload);
    res.json({ message: "User Created Successfully.", userDetails: newUser });
  } catch (err) {
    res.status(400).send({ message: err?.message });
  }
};

const updateUser =()=>{

};

export default {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
};
