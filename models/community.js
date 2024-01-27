const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../config/config");

// Define the Community model
const Community = sequelize.define("Community", {
// ID field
  id: {
    type: DataTypes.STRING,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  // Name field
  name: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  //Slug field
  slug: {
    type: DataTypes.STRING(255),
    unique: true,
  },
  // Owner field
  owner: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
});

// Export the model
module.exports = Community;
