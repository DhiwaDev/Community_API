const express = require("express");
const router = express.Router();

// Import necessary modules/controllers
const { signup, signin, getMe } = require("../controllers/authController");

// Routes
router.post("/auth/signup", signup);
router.post("/auth/signin", signin);
router.get("/auth/me", getMe);

// Export the router
module.exports = router;
