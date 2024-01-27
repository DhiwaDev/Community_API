const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('community_api', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

// Export the Sequelize instance to be used in other parts of the application
module.exports = sequelize;