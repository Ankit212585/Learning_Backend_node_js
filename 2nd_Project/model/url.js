const mongoose = require("mongoose");

// Schema Structure

const urlSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const Url = mongoose.model("url", urlSchema);
module.exports = Url;
