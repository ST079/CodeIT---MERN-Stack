import config from "../config/config.js";
import resetPasswordModel from "../models/ResetPassword.js";
import userModel from "../models/User.js";
import { passwordResetTemplate } from "../templates/passwordResetTemplate.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.js";
import sendEmail from "../utils/email.js";

const login = async (payload) => {
  const user = await userModel.findOne({
    $or: [{ email: payload?.email }, { phone: payload?.phone }],
  });

  if (!user) throw { status: 400, message: "User Not found" };

  if (!user.isActive) throw { status: 400, message: "User Deactivated!" };

  const isValidPassword = await comparePassword(
    payload.password,
    user.password,
  );
  if (!isValidPassword) throw { status: 400, message: "Invalid Credentials" };

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    address: user.address,
    roles: user.roles,
    phone: user.phone,
    isActive: user.isActive,
  };
};

const register = async (payload) => {
  const user = await userModel.findOne({
    $or: [{ email: payload?.email }, { phone: payload?.phone }],
  });

  if (user) throw { status: 409, message: "User already exists" };

  payload.password = await hashPassword(payload.password);

  const newUser = await userModel.create(payload);

  return {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    address: newUser.address,
    roles: newUser.roles,
    phone: newUser.phone,
    isActive: newUser.isActive,
  };
};

const forgotPassword = async (email) => {
  const user = await userModel.findOne({ email });

  //never send message saying if user is found.
  if (!user) throw { status: 404, message: "User not found. " };

  const token = crypto.randomUUID();

  await resetPasswordModel.create({
    userId: user._id,
    token,
  });

  //link : app-url/reset-password?userID=id&token=token
  const resetLink = `${config.app_url + config.version}/auth/reset-password?userId=${user._id}&token=${token}`;

  //send email
  await sendEmail(email, {
    subject: "Reset Password",
    body: passwordResetTemplate(resetLink),
  });

  return {
    message: "Reset password link sent to your email. Please check your inbox.",
  };
};

const resetPassword = async (userId, token, password) => {
  // verify user and token
  const data = await resetPasswordModel
    .findOne({
      userId,
      expireAt: { $gt: new Date() },
    })
    .sort({ createdAt: -1 });

  if (!data || data.token !== token)
    throw {
      status: 400,
      message: "Invalid or expired password reset token.",
    };

  if (data.isUsed)
    throw { status: 400, message: "Link has already been used." };

  //reset password
  const hashedPassword = await hashPassword(password);
  await userModel.findByIdAndUpdate(userId, { password: hashedPassword });

  await resetPasswordModel.findByIdAndUpdate(data._id, { isUsed: true });

  return {
    message:
      "Password reset successful. You can now log in with your new password.",
  };
};

export default {
  register,
  login,
  forgotPassword,
  resetPassword,
};
