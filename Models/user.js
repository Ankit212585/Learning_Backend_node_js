const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");

// schema Structure

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
});

userSchema.methods.generateToken = async function () {
  try {
    return JWT.sign(
      {
        userId: this._id.toString(),
        Email: this.Email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
