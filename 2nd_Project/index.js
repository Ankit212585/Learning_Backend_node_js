const express = require("express");
const dbConnect = require("./db/dbConnection");

const urlRoute = require("./routes/urlRouter");

const app = express();

const Port = 9001;
app.use(express.json());

app.use("/url", urlRoute);

dbConnect().then(() => {
  app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
  });
});
