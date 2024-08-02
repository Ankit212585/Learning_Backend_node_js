// How to use RestFul Apis from the Dummy data...!

const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");

// Get all the users Data
app.get("/api/user", (req, res) => {
  res.setHeader("MyName", "Ankit_Panwar");
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

// apply middleware

app.use(express.urlencoded({ extended: false }));
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
    let userId = parseInt(req.params.id);
    ThisUser = users.filter((user) => user.id !== userId);
    fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(users, null),
      (err) => {
        if (err) {
          console.log(err);
        }
        return res.json({
          status: "panding",
          message: "user successfull delete",
        });
      }
    );
  });
app.post("/api/user", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile(
    "./MOCK_DATA.json",
    JSON.stringify(users),
    (err, data) => {
      return res.json({
        status: "success",
        ...body,
        id: users.length + 1,
      });
    }
  );
});

app.listen(7000, () => {
  console.log("your server will be started");
});
