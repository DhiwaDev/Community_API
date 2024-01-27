const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../config/config");

// Define the Member model
const Member = sequelize.define("Member", {
// ID field
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  // Community field
  community: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "communities",
      key: "id",
    },
  },
  // User field
  user: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
  // Role field
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "roles",
      key: "id",
    },
  },
});

// Export the model
module.exports = Member;
