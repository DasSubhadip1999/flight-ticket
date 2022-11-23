const asyncHanlder = require("express-async-handler");
const User = require("../models/userModel");
const Ticket = require("../models/ticket");

const getTicket = asyncHanlder(async (req, res) => {
  //get the user from jwt
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  res.status(200);
  res.json({ message: "ok" });
});

const saveTicket = asyncHanlder(async (req, res) => {
  const { airport, date, from, singlePrice, terminal, to, totalAmount } =
    req.body;

  if (
    !airport ||
    !date ||
    !from ||
    !singlePrice ||
    !terminal ||
    !to ||
    !totalAmount
  ) {
    res.status(400);
    throw new Error("All fields not available");
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.create({
    airport,
    date,
    from,
    singlePrice,
    terminal,
    to,
    totalAmount,
    user: req.user.id,
  });

  res.status(201).json(ticket);
});

module.exports = {
  getTicket,
  saveTicket,
};
