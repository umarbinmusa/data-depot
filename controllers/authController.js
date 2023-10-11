const User = require("../models/userModel");
const { StatusCodes } = require("http-status-codes");
const { comparePassword, hashPassword } = require("../utils/passwordUtils.js");
const generateAcc = require("../utils/accountNumbers");
const saveReferral = require("../utils/referral");

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
    return res.status(400).json({ msg: "This username has been taken" });

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
const login = (req, res) => {
  res.send("login");
};

module.exports = {
  register,
  login,
};
