const mongoose = require("mongoose");
const validator = require("validator");
const userModel = mongoose.Schema({
  userName: { type: String, require: true, trim: true, lowercase: true },
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
  phoneNumber: { type: String, required: true, trim: true },
  role: { enum: ["user", "admin", "agent"] },
});

module.exports = mongoose.model("user", userModel);
