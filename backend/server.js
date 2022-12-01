require("dotenv").config();
const color = require("colors");
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRouter"));
app.use("/api/flights", require("./routes/flightRouter"));
app.use("/api/flights/airlines", require("./routes/airlineRouter"));
app.use("/api/tickets", require("./routes/ticketRouter"));
app.use(errorHandler);

//server the front end
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(__dirname, "../", "frontend", "build", "index.html");
  });
} else {
  app.get("/", (req, res) => {
    res.status(200);
    res.json({ message: "Welcome to flight ticket API" });
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.yellow.underline);
});
