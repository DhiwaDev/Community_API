const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../config/config");

// Define the Role model
const Role = sequelize.define("Role", {
// ID field
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  // Name field
  name: {
    type: DataTypes.STRING(64),
    allowNull: false,
    unique: true,
  },
});

// Export the model
module.exports = Role;
