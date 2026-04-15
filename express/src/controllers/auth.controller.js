import authService from "../services/auth.service.js";
import { generateJwt } from "../utils/token.js";
const login = async (req, res) => {
  try {
    const payload = req.body;
    const user = await authService.login(payload);
    const token = generateJwt(user);
    //storing token in cookie key, value
    res.cookie("authToken", token, { maxAge: 86400 * 1000 });
    if (user) {
      res.json({ message: "Login successful", token: token });
    }
  } catch (error) {
    res.status(error.status || 400).send({ message: error?.message });
  }
};

const register = async (req, res) => {
  try {
    const payload = req.body;
    const newUser = await authService.register(payload);
    const token = generateJwt(newUser);
    res.cookie("authToken", token, { maxAge: 86400 * 1000 });
    res.json({ message: "Registration successful", registeredUser: newUser });
  } catch (error) {
    res.status(error.status || 400).send({ message: error?.message });
  }
};

export default {
  login,
  register,
};
