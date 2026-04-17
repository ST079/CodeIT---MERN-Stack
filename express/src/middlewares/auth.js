import { verifyJwt } from "../utils/token.js";

const auth = async (req, res, next) => {
  const cookie = req.headers.cookie;

  if (!cookie)
    return res.status(401).json({ message: "User not authenticated." });

  const token = cookie.split("=")[1];

  if (!token)
    return res.status(401).json({ message: "User not authenticated." });

  try {
    const data = await verifyJwt(token);

    req.user = data;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token." });
  }
};

export default auth;
