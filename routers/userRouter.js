const express = require("express");
const GenerateUser = require("../controllers/userControllers");
const router = express.Router();

// router.get("/", GenerateUser);
router.post("/", GenerateUser);

module.exports = router;
