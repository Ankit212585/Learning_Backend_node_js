const express = require("express");
const {
  handleGenerateNewShortURL,
} = require("../controllers/urlController");

const router = express.Router();

router.get("/get", (req, res) => {
  res.send("hello world");
});
router.post("/post", handleGenerateNewShortURL);

module.exports = router;
