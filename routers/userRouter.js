const express = require("express");
const GenerateUser = require("../controllers/userControllers");
const GetUser = require("../controllers/getuserControllers");

const router = express.Router();

// Here is previous router method

// router.route("/").get(GetUser).post(GenerateUser);

router.post("/", GenerateUser);
router.get("/post", GetUser);

module.exports = router;
