const express = require("express");
const path = require("path");
const router = require("./routers/userRouter");
const app = express();
const dotenv = require("dotenv");
const dataBase = require("./db/dataBase");
 

// dotenv file
dotenv.config();

// middleWare
app.use(express.json());

app.use("/api/user", router);

// Ejs working
// app.set("view engine", "ejs");

 

dataBase().then(() => {
  app.listen(process.env.Port, (err) => {
    if (err) {
      console.log("Server is not running");
    } else {
      console.log("Server is running");
    }
  });
});
