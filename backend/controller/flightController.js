const asyncHandler = require("express-async-handler");
const Flight = require("../models/flightModel");

const getFlightLocations = asyncHandler(async (req, res) => {
  const flightLocations = await Flight.find();

  if (!flightLocations) {
    res.status(400);
    throw new Error("Flights locations not found!");
  }

  res.status(200).json(flightLocations);
});

module.exports = {
  getFlightLocations,
};
