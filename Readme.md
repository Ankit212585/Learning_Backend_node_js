# start node js

<!-- Q:- why we use node.js. -->

Ans:- node.js is a javascript runtime environment. it is used to run
javascript code outside the browser. Node.js is a powerful tool for
server-side development, and it offers several advantages that make it
popular among developers. Performance: Node.js is built on the V8
JavaScript engine from Google, which compiles JavaScript to machine
code and provides excellent performance.Node.js is commonly used for
creating RESTful APIs and microservices, which can be easily
integrated into larger applications or systems.

<!-- Q:- How to create a package.json file. -->

Ans:- To create a package.json file, you can use the npm init command.
This command will create package.json file

1. create any js file and try to run the code like console.log
   ("hello_world")

2. How to import or export functions and files. Basically when you
   export any function or a module then write module.exports = file
   name;

ii. On other hand when you import any file than write the code const
variable name = require("./pathfile")\*\*

<!-- Q:- How to create a fs file -->

Ans:- Basically fs (fileSystem) is a inbuilt file in nodejs and fs
file create any file which you required. The fs module in Node.js
provides an API for interacting with the file system. It allows you to
perform various operations such as reading, writing, updating, and
deleting files and directories on your file system. The fs module can
be used in both synchronous and asynchronous (non-blocking) modes,
giving you flexibility in how you handle file system operations.

sync file system hume apni koi bhi value ko jise hme read krni ho wo
ek varibable mai store krne deti hai.

Async file system hum apni value ko store krne nhi deti prr wo hume ek
call backfunction return krti hai or ye callback function 2 perameter
use krta hai, sbse phele ye ek error lega means ager hmari file mai
koi error hoga toh wo return krega wo, then wo ek perameter return
krega wo hmari value ko render kregi...

<!-- How to work node js -->

we know all about this sync programing and Async programing, as well
we have blocking and non-blocking threads when we use sync blocking
programing we have like only four worker, and when 4 client post the 4
requests the all worker are busy and sync crash their sever.

on other hand when we use Async blocking system when we already know
async programing post multiple resquest and get some data on the
server. and most of the users woks on only asynce programing system.

<!-- How to pass a url give me berif info -->

Ans:- Basically URL is uniform Resource Locator. In Node.js, a URL
(Uniform Resource Locator) is a string that specifies the address of a
resource on the internet. Node.js provides the url module, which
allows for URL resolution and parsing. Here's a brief overview of how
the url module works:

const url = require("URL") //URL is a inbuilt function in nodejs
