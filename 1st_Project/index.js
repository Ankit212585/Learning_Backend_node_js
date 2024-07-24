// How to use RestFul Apis from the Dummy data...!

const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

// Get all the users Data
app.get("/api/user", (req, res) => {
  res.json(users);
});

// Get all the users Name data
app.get("/api/user/name", (req, res) => {
  const html = `<ul>
     ${users.map((data) => `<li>${data.first_name}</li>`).join("")} 
   </ul>`;
  res.send(html);
});

// Get all the user data with id
app
  .route("/api/user/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // Edit user is still panding
    return res.json({ status: "panding" });
  })
  .delete((req, res) => {
    // Delete user is still panding
    return res.json({ status: "panding" });
  });
app.post("/api/user/:id", (req, res) => {
  // Create a user still panding
  return res.json({ status: "panding" });
});

app.listen(7000, () => {
  console.log("your server will be started");
});
