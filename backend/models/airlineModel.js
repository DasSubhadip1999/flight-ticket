const mongoose = require("mongoose");

const airlineSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: {
      from: String,
      to: String,
    },
    required: true,
  },
  departure: {
    type: Date,
    require: true,
  },
  arrival: {
    type: Date,
    require: true,
  },
  price: {
    type: Number,
    requird: true,
  },
});

module.exports = mongoose.model("Airlines", airlineSchema);
