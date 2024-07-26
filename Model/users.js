const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema Structure

const userSchema = new Schema({
  FirstName: {
    type: String,
    require: true,
  },
  LastName: {
    type: String,
  },
  Email: {
    type: String,
    require: true,
    unique: true,
  },
  JobTitle: {
    type: String,
    require: true,
  },
  Gender: {
    type: String,
    require: true,
  },
});

// Schema Model

const User = mongoose.model("User", userSchema);
module.exports = User;
