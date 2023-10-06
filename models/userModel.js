const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
    lowercase: true,
  },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true, trim: true },
  state: { type: String, required: true },
  password: { type: String, required: [true, "enter a password"] },
  balance: { type: Number, min: 0, default: 0 },
  bonusBalance: { type: Number, min: 0 },
  role: {
    enum: ["user", "admin", "ambassador"],
    type: String,
    default: "user",
  },
  referredBy: { type: String },
  state: { type: String, lowercase: true },
  accountNumbers: [{ bankName: String, accountNumber: String }],
  referrals: [{ userName: String, totalEarned: Number }],
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
module.exports = mongoose.model("User", userSchema);
