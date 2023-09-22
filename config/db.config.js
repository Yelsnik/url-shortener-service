const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(
    "mongodb+srv://kingsley:mahanta@cluster0.30vt0jd.mongodb.net/url-shortener-nodejs",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected!");
  });
