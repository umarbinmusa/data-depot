const User = require("../models/userModel");
const { StatusCodes } = require("http-status-codes");
const { comparePassword, hashPassword } = require("../utils/passwordUtils.js");
const generateAcc = require("../utils/accountNumbers");
const saveReferral = require("../utils/referral");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const Token = require("../models/tokenModel");
const sendEmail = require("../utils/sendMail");

const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const {
    userName,
    email,
    state,
    password,
    passwordCheck,
    phoneNumber,
    referredBy,
  } = req.body;
  if (
    !email ||
    !userName ||
    !password ||
    !passwordCheck ||
    !phoneNumber ||
    !state
  )
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "All fields are required" });

  // VALIDATION
  if (password.length < 5)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "The password needs to be at least 5 characters long." });
  if (password !== passwordCheck)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Enter the same password twice for verification." });

  const existingUserEmail = await User.findOne({ email: email });
  if (existingUserEmail)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "An account with this email already exists." });
  const existingUsername = await User.findOne({ userName: userName });
  if (existingUsername)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "This username has been taken" });

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const user = await User.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ ...user._doc, msg: "registration successful" });
  // generate Account numbers
  generateAcc({ ...req.body });
  // if referred by someone
  if (referredBy) saveReferral({ ...req.body });
};
const login = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Please enter all credentials" });
  //find user in db and compare passwords
  let user = await User.findOne({ userName });
  if (!user) user = await User.findOne({ email: userName });
  if (!user)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Invalid Credentials" });
  const isPasswordMatch = await comparePassword(password, user.password);
  if (!isPasswordMatch)
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Wrong password" });
  const token = user.createJWT();
  const isAdmin = user._id.role === "admin";
  res.status(StatusCodes.OK).json({ token, isAdmin, ...user._doc });
};
const validateToken = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.userId);
    if (!user) return res.json(false);
    await User.updateOne(
      { _id: user.id },
      { $currentDate: { lastLogin: true } }
    );
    const isAdmin = user._id.role === "admin";

    res.status(StatusCodes.OK).json({ isAdmin, ...user._doc });
    // return res.json(true);
  } catch (err) {
    // console.log(err);
    res.status(500).json({ msg: err.message });
  }
};
const requestPasswordReset = async (req, res) => {
  const { email } = req.body;
  if (!email)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide email" });
  const user = await User.findOne({ email: email });

  if (!user)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "No account with this email has been registered." });
  try {
    let token = await Token.findOne({ userId: user._id });
    if (token)
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: "You just requested a password reset please check your email or try again later",
      });
    let resetToken = crypto.randomBytes(32).toString("hex");
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(resetToken, salt);
    await new Token({
      userId: user._id,
      token: hash,
      createdAt: Date.now(),
    }).save();

    const link = `${process.env.FRONTEND_URL}/passwordReset/${resetToken}/${user._id}`;
    sendEmail(
      user.email,
      "Password Reset Request",
      { name: user.fullName, link: link },
      "../templates/requestResetPassword.handlebars"
    );

    return res.status(StatusCodes.OK).json({
      msg: "An email has been sent to you. Kindly check your email. Check spam folder if not found",
    });
  } catch (error) {
    console.log(error);
  }
};
const resetPassword = async (req, res) => {
  const { token, userId, newPassword, newPasswordCheck } = req.body;
  if (!newPassword || !newPasswordCheck || !token || !userId)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "All fields are required" });
  if (newPassword !== newPasswordCheck)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Enter the same password for verification" });
  try {
    let passwordResetToken = await Token.findOne({ userId });
    if (!passwordResetToken)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Invalid or expired password reset token" });
    const isValid = await bcrypt.compare(token, passwordResetToken.token);

    if (!isValid)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Invalid or expired password reset token" });

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(newPassword, salt);
    await User.updateOne({ _id: userId }, { $set: { password: hash } });
    const user = await User.findById({ _id: userId });
    sendEmail(
      user.email,
      "Password Reset Successful",
      {
        name: user.fullName,
        link: process.env.FRONTEND_URL,
      },
      "../templates/resetPassword.handlebars"
    );
    await passwordResetToken.deleteOne();
    return res
      .status(StatusCodes.OK)
      .json({ msg: "You have successfully reset your password" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  register,
  login,
  validateToken,
  requestPasswordReset,
};
