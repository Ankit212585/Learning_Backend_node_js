const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// sync...
// fs.writeFileSync("./test.txt", "Hello World");

// Async...

// fs.writeFile("./test.txt", "Hello there async", (err) => {
//   console.log(err);
// });

// How to read fs file sync...
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// This is async file reading
// fs.readFile("./contact.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// console.log(fs.statSync("./test.txt"));

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
