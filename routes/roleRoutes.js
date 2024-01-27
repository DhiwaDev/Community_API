const express = require("express");
const router = express.Router();

// Import necessary modules/controllers
const { createRole, getAllRoles } = require("../controllers/roleController");

// Routes
router.post("/role", createRole);
router.get("/role", getAllRoles);

// Export the router
module.exports = router;
