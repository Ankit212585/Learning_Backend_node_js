const { generate } = require("shortid");
const User = require("../Models/user");
// const JWT = require("jsonwebtoken");

// Register user -------------------------------------------------------
const register = async (req, res) => {
  try {
    const { firstName, lastName, Email, jobTitle } = req.body;

    // find user
    const userExist = await User.findOne({ Email });

    if (!userExist) {
      res.status(500).json("user cannot be find in dataBase");
    }
    if (userExist) {
      res.status(200).json({ message: userExist });
    }
    // create any user
    const myUser = await User.create({
      firstName,
      lastName,
      Email,
      jobTitle,
    });
    console.log({
      msg: myUser,
      token: await myUser.generateToken(), //this token is working on it
      userId: myUser._id.toString(),
    });
    res.status(201).json({
      message: `user successfully created ${myUser}`,
      token: await myUser.generateToken(),
      userId: myUser._id.toString(),
    });
  } catch (err) {
    console.log("User cannot be created", err);
  }
};

// Login user -----------------------------------------------------------

const Login = async (req, res) => {
  try {
    const { Email } = req.body;

    // Find user Email
    const Existuser = await User.findOne({ Email });

    if (!Existuser) {
      res.status(400).json("user cannot find");
    } else {
      res.status(200).json({
        msg: "user successfully login",
        // token: await User.generateToken,
        // userId: Existuser._id.toString(),
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json("User cannot be login", err);
  }
};

// Get user info

const GetUser = async (req, res) => {
  try {
    const users = await User.find();
    if (users && users.length > 0) {
      res.status(200).json({ message: users });
    } else {
      res.status(404).json("user cannot be find in dataBase");
    }
  } catch (err) {
    console.log("User cannot be created", err);
  }
};

module.exports = { register, GetUser, Login };
