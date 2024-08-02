const express = require("express");
const userControllers = require("../controllers/userControllers");

const router = express.Router();

// Here is previous router method

// router.route("/").get(GetUser).post(GenerateUser);

router.route("/register").post(userControllers.register);
router.route("/Login").post(userControllers.Login);
router.route("/").get(userControllers.GetUser);

module.exports = router;
