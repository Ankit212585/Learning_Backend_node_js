const http = require("http");

const myserver = http.createServer((req, res) => {
  console.log("Hello world");
  switch (req.url) {
    case "/":
      res.end("<h1>Hello I'm There</h1>");
      break;
    case "/Home":
      res.end("<h1>Hello I'm your Homepage</h1>");
      break;
    case "/about":
      res.end("<h1>Hello I'm your about page</h1>");
      break;
    case "/Help":
      res.end("<h1>How can I Help your</h1>");
      break;
    default:
      res.end("<h1>404 Page not found</h1>");
  }

  //   res.end("<h1>Hello Ankit I'm your friend</h1>");
});

myserver.listen(7000, () => {
  console.log("your server will be start");
});
