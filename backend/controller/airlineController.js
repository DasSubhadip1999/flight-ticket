const asyncHandler = require("express-async-handler");
const { db } = require("../models/airlineModel");
const Airline = require("../models/airlineModel");

const getAirlines = asyncHandler(async (req, res) => {
  const { from, to } = req.body;

  const dbData = await Airline.find();

  let newData = dbData.filter(({ location }) => {
    return location.from === from.city && location.to === to.city;
  });

  res.status(200);
  res.json(newData);
});

module.exports = {
  getAirlines,
};
