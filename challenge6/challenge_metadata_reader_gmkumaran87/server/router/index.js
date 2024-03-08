const express = require("express");
const { fetchMetaData, getDataFromUrl } = require("../controller");

const router = express.Router();
console.log("Router is listening");
router.route("/meta-data").post(fetchMetaData);

module.exports = router;
