import authService from "../services/auth.service.js";

const login = async (req, res) => {
  res.json({ message: "Login successful" });
};

const register = async (req, res) => {
  try {
    const payload = req.body;
    const newUser = await authService.register(payload);
    res.json({ message: "Registration successful", registeredUser: newUser });
  } catch (error) {
    res.status(error.status || 400).send(error?.message);
  }
};

export default {
  login,
  register,
};
