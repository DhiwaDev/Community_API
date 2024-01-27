const express = require("express");
const sequelize = require("./config/config");
const bodyParser = require("body-parser");
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 3000;
// Set the JSON body parser for the server
app.use(bodyParser.json());

// Authenticate the connection to the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Sync the Sequelize models with the database
sequelize
  .sync()
  .then(() => {
    console.log("Models synced with the database.");
  })
  .catch((err) => {
    console.error("Error syncing models:", err);
  });

// Set the routes
app.use("/v1", require("./routes/roleRoutes"));
app.use("/v1", require("./routes/authRoutes"));
app.use("/v1", require("./routes/communityRoutes"));
app.use("/v1", require("./routes/memberRoutes"))

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
