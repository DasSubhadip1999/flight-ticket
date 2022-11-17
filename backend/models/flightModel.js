const mongoose = require("mongoose");

const flightSchema = mongoose.Schema({
  location: {
    type: [
      {
        city: {
          type: String,
          requied: [true, "City name is required"],
        },
        country: {
          type: String,
          requied: [true, "Country name is required"],
        },
        cityCode: {
          type: String,
          required: [true, "City code is required"],
        },
        airport: {
          type: String,
          required: [true, "Airport name is required"],
        },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("Flight", flightSchema);
