const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log("New req received");
  switch (req.url) {
    case "/":
      res.end("Hello I'm your homePage");
      break;
    case "/about":
      res.end("hello I'm your about page");
      break;
    case "/Help":
      res.end("How can I help you");
      break;
    case "/*":
      res.end("404 error");
  }
  //   res.end("<h1>Hello sir I'm your serveer</h1>");
});

myServer.listen(5000, () => {
  console.log("server started");
});
