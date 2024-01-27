const express = require("express");
const router = express.Router();

// Import necessary modules/controllers
const {
  createCommunity,
  getAllCommunities,
} = require("../controllers/communityController");

// Routes
router.post("/community", createCommunity);
router.get("/community", getAllCommunities);

// Export the router
module.exports = router;
