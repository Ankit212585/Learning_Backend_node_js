const User = require("../Models/user");

const GenerateUser = async (req, res) => {
  try {
    const { firstName, lastName, Email, jobTitle } = req.body;

    // find user
    const userExist = await User.findOne({ Email });

    if (!userExist) {
      res.status(500).json("user cannot be find in dataBase");
    }

    // create any user
    const myUser = await User.create({
      firstName,
      lastName,
      Email,
      jobTitle,
    });
    console.log(myUser);
    res
      .status(201)
      .json({ message: `user successfully created ${myUser}` });
  } catch (err) {
    console.log("User cannot be created", err);
  }
};

module.exports = GenerateUser;
