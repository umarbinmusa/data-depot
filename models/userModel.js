const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const randomToken = require("rand-token");
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
    enum: ["user", , "reseller", "admin", "ambassador"],
    type: String,
    default: "user",
  },
  referredBy: { type: String },
  state: { type: String, lowercase: true },
  accountNumbers: [{ bankName: String, accountNumber: String }],
  referrals: [{ userName: String, totalEarned: Number }],
  apiKey: { type: String },
  lastLogin: { type: Date },
});

// methods
userSchema.methods.createJWT = function () {
  return jwt.sign(
    {
      userId: this._id,
      userType: this.userType,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};
// create apiKey before save user
userSchema.pre("save", async function () {
  return (this.apiKey = await randomToken.generate(30));
});
module.exports = mongoose.model("User", userSchema);
