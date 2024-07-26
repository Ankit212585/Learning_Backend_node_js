const URL = require("../model/url");

// Here is created the Nano_id with NPM packages and the installation command is npm i nanoid, basically nanoid create a rendom number type of id
const { shortid } = require("shortid");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url)
    return res.status(400).json({ error: "url is required" });
  const shortId = shortid(8); //8 is indicate the number of length
  console.log(shortId);
  await URL.create({
    shortID: shortId,
    redirectURL: body.url,
    visitedHistory: [],
  });
  return res.status(200).json({ id: shortId });
}

module.exports = {
  handleGenerateNewShortURL,
};
