const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../config/config");

// Define the User model
const User = sequelize.define("User", {
// ID field
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
// Name field
  name: {
    type: DataTypes.STRING(64),
    allowNull: true,
  },
  // Email field
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
    unique: true,
  },
  // Password field
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
});

// Export the model
module.exports = User;
