const User = require("../Models/user");

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

module.exports = GetUser;
