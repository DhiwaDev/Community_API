const User = require("./user");
const Community = require("./community");

// Define the relationships
Community.belongsTo(User, { as: "Owner", foreignKey: "owner" });
User.hasMany(Community, { as: "Communities", foreignKey: "owner" });

// Export the models
module.exports = {
  User,
  Community,
};
