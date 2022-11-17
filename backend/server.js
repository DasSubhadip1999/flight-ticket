require("dotenv").config();
const color = require("colors");
const express = require("express");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Welcome to flight ticket API" });
});

app.use("/api/flights", require("./routes/flightRouter"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.yellow.underline);
});
