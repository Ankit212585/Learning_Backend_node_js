const Url = require("../model/url");

// Here is created the Nano_id with NPM packages and the installation command is npm i nanoid, basically nanoid create a rendom number type of id
const { shortid } = require("shortid");

const handleGenerateNewShortURL = async (req, res) => {
  try {
    const { shortID, username, visitedHistory } = req.body;

    const userExist = await Url.findOne({ username });

    if (!userExist)
      res.status(400).json({ error: "username is required" });

    const shortId = shortid(8); //8 is indicate the number of length
    console.log(shortId);

    const myuser = await Url.create({
      shortID: shortId,
      username,
      visitedHistory,
    });
    return res.status(200).json({ msg: myuser });
  } catch (err) {
    res.status(500).json(`invalide user ${err}`);
  }
};

module.exports = {
  handleGenerateNewShortURL,
};
