const mongoose = require("mongoose");

const URI =
  "mongodb+srv://ankitpanwar212585:%40Ankit@learnmongo.kvmtcu1.mongodb.net/";

const dbConnect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database is connected");
  } catch (err) {
    console.log("DataBase is not connected");
  }
};

module.exports = dbConnect;
