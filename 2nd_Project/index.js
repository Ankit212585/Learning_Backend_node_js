const express = require("express");
const mongoose = require("mongoose");

const urlRoute = require("./routes/urlRouter");

const app = express();
mongoose
  .connect(
    "mongodb+srv://ankitpanwar212585:%40Ankit@learnmongo.kvmtcu1.mongodb.net/"
  )
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log("MongoDb is not Connected", err);
  });

const Port = 9001;

app.use("/url", urlRoute);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
