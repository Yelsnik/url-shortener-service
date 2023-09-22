const validUrl = require("valid-url");
const shortid = require("shortid");
const urlModel = require("../models/urlModel");
const urlCode = shortid.generate();

const baseUrl = "http:localhost:8000";

exports.submitUrl = async (req, res) => {
  const longUrl = req.body.longUrl;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid Url",
    });
  }

  if (validUrl.isUri(longUrl)) {
    try {
      let url = await urlModel.findOne({ longUrl });

      if (url) {
        res.json({
          data: url,
        });
      } else {
        const shortUrl = `${baseUrl}/${urlCode}`;

        url = await urlModel.create({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        res.status(200).json(url);
      }
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  } else {
    res.status(401).json({
      message: "Invalid longUrl",
    });
  }
};

exports.redirectCode = async (req, res) => {
  try {
    const url = await urlModel.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No URL Found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
};

exports.homepage = async (req, res) => {
  try {
    const urls = await urlModel.find({});

    res.status(200).json({
      status: "success",
      data: urls,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err,
    });
  }
};
