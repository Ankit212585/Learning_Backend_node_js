const express = require("express");

const app = express();
const port = 9000;

app.use((req, res, next) => {
  res.send("hello world");
  next();
});
app.use((req, res, next) => {
  res.send("hello universe");
  next();
});

app.listen(port, (err) => {
  console.log("something went wrong", err);
});
