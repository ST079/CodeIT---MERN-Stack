import userService from "../services/user.service.js";

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



export default {
  createUser,
};
