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

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const data = await authService.forgotPassword(email);
    res.json(data);
  } catch (error) {
    res.status(error.status || 400).send({ message: error?.message });
  }
};

const resetPassword = async (req, res) => {
  const query = req.query;

  if (!query.token || !query.userId) {
    return res
      .status(400)
      .json({ message: "Invalid request. Missing token or userID." });
  }

  try {
    const { token, userId } = query;
    const data = await authService.resetPassword(
      userId,
      token,
      req.body.password,
    );
    res.json(data);
  } catch (error) {
    res.status(error.status || 400).send({ message: error?.message });
  }
};

export default {
  login,
  register,
  forgotPassword,
  resetPassword,
};
