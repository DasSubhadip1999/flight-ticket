const express = require("express");
const { getAirlines } = require("../controller/airlineController");

const router = express.Router();
router.route("/").post(getAirlines);

module.exports = router;
