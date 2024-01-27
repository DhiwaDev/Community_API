const express = require("express");
const router = express.Router();

// Import necessary modules/controllers
const { addMember, removeMember } = require("../controllers/memberController");

// Routes
router.post("/member", addMember);
router.delete("/member/:id", removeMember);

// Export the router
module.exports = router;
