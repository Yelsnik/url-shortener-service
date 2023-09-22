const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/db.config");
const cors = require("cors");
const urlRoute = require("./routes/urlRoutes");

const app = express();

const PORT = process.env.PORT || 8000;

// Routes
app.use(express.json());
app.use(cors());
app.use("/", urlRoute);

// Server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
