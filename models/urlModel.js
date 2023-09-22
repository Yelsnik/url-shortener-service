const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const URLSchema = new Schema({
  urlCode: String,
  longUrl: {
    type: String,
    required: [true],
  },
  shortUrl: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

const Url = mongoose.model("Url", URLSchema);
module.exports = Url;
