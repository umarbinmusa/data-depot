const express = require("express");
const {
  login,
  register,
  validateToken,
  requestPasswordReset,
} = require("../controllers/authController");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/validateToken", validateToken);
router.post("/requestPasswordReset", requestPasswordReset);

module.exports = router;
