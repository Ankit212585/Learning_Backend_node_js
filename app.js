const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/usersRoutes");

const app = express();
const Port = 7000;

// middleWare

app.use(bodyParser.json);

// connect to MongoDb

mongoose
  .connect(
    "mongodb+srv://ankitpanwar212585:%40Ankit@learnmongo.kvmtcu1.mongodb.net/myApi",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err, "MongoDb is not Connected");
  });

// Routes

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Api");
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

module.exports = app;
