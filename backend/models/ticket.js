const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  airport: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  singlePrice: {
    type: Number,
    required: true,
  },
  terminal: {
    type: Number,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Ticket", ticketSchema);
