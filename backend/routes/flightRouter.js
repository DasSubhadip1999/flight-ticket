const express = require("express");
const { getFlightLocations } = require("../controller/flightController");

const router = express.Router();

router.route("/").get(getFlightLocations);
module.exports = router;
