const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc register a new user POST - /api/user/register
//@access public
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  //validation of user data available
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Register data not available");
  }

  //find user already exists
  const userExists = await User.findOne({ email });
  //console.log(userExists);
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //hash
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create a new user in DB
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  //if creating user is successfull
  //send jwt token
  if (user) {
    const { _id, name, email } = user;
    res.status(201).json({
      _id,
      name,
      email,
      token: generateToken(_id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//siging the jwt token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //find the user in DB
  const user = await User.findOne({ email });

  //match password
  const val = await bcrypt.compare(password, user.password);

  if (user && (await bcrypt.compare(password, user.password))) {
    const { _id, name, email } = user;
    res.status(200).json({
      _id,
      name,
      email,
      token: generateToken(_id),
    });
  } else {
    res.status(400);
    throw new Error("Wrong email id or password");
  }
});

module.exports = {
  registerUser,
  loginUser,
};
