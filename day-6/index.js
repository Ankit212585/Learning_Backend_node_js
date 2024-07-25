// HTTP Status codes
// connect mongoDb
const express = require("express");
const myusers = require("./MOCK_DATA.json");

const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: false }));

// Connecting Mongoose
mongoose
  .connect(
    "mongodb+srv://ankitpanwar212585:%40Ankit@learnmongo.kvmtcu1.mongodb.net/"
  )
  .then(() => console.log("mongoDb is connected"))
  .catch((err) => {
    console.log("mongoDb is not connected", err);
  });

// Schema Structure
const userSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

// Schema Model
const User = mongoose.model("User", userSchema);

app
  .route("/myusers/:id")
  .get(async (req, res) => {
    const finduser = await User.findById(req.params.id);
    console.log(finduser); // find some data from id
    if (!finduser)
      return res.status(404).json({ err: "user not found" });
    res.status(200).json(myusers);
  })
  .post(async (req, res) => {
    const body = req.body;
    if (
      !body ||
      !body.FirstName ||
      !body.LastName ||
      !body.Email ||
      !body.JobTitle
    ) {
      return res
        .status(400)
        .json({ message: "All field are req..." });
    }
    const result = await User.create({
      FirstName: body.FirstName,
      LastName: body.LastName,
      Email: body.Email,
      JobTitle: body.JobTitle,
    });
    console.log(result);

    return res
      .status(201)
      .json({ message: "User Secuessfully Created" });
  })
  .delete(async (req, res) => {
    const findDeleteUser = await User.findByIdAndDelete(
      req.params.id
    );
    console.log(findDeleteUser, "Delete user SuccessFully"); //user delete SecuessFully
    return res.json((status = "sucess"));
  });

app.listen(8000, (err) => {
  if (err) {
    console.log(err, "something went wrong");
  } else {
    console.log("Server Stated at Port 8000");
  }
});

// Here is the corret node js code , perfectly use to express js, perfectly use routes, perfectly use to get_Method, perfectly use to post method, when i'm post some data throw the postman , This data perfectly save in the Mongoose dataBase
