// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const teaController = require("./controllers/teasController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
require("dotenv").config();
// ROUTES
app.use("/teas", teaController);

app.get("/", (req, res) => {
  res.send("Welcome to Uncle Irohs Tea shop!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page you are looking for does not exist")
})

// EXPORT
module.exports = app;
