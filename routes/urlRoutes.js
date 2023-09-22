const express = require("express");
const urlController = require("../controllers/urlController");

const router = express.Router();

router.route("/all").get(urlController.homepage);

router.route("/shorten").post(urlController.submitUrl);

router.route("/:code").get(urlController.redirectCode);

module.exports = router;
