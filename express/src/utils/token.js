import jwt from "jsonwebtoken";
import config from "../config/config.js";

const generateJwt = (payload) => {
  return jwt.sign(payload, config.jwt_secret, { expiresIn: "1d" });
};

const verifyJwt = async (token) => {
    //converting call back to  promise
  return await new Promise((resolve, reject) => {
    jwt.verify(token, config.jwt_secret, (error, data) => {
      if (error) throw reject(error);
      resolve(data);
    });
  });
};

export { generateJwt, verifyJwt };
