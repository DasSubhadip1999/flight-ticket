const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { getTicket, saveTicket } = require("../controller/ticketController");

router.route("/").post(protect, saveTicket).get(protect, getTicket);

module.exports = router;
