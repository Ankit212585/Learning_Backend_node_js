// We using the express js in this file...
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/Home", (req, res) => {
  res.send("Hello I'm your Home_Page");
});

app.get("/*", (req, res) => {
  res.send("404 page not found");
});
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
