const mongoose = require("mongoose");

const dataBase = async () => {
  try {
    const db = await mongoose.connect(process.env.dataBase_key);
    console.log("DataBase is connected");
  } catch (err) {
    console.log("DataBase is not connected");
  }
};

module.exports = dataBase;
