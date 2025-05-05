const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const sequelize = require('../config/db');
const User = require("../models/userModel");

// Sync DB
sequelize
.sync({ alter: true })
.then(() => console.log("Database & tables synced!"))
.catch((err) => console.error("Error syncing database:", err.message));

// Create JWT token
const createToken = (email) => {
  return jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Admin login
router.post("/login", (req, res) => {
  try {
    console.log("Body received:", req.body); 
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = createToken(email);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
});

module.exports = router;
