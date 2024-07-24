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

<!-- What is Express js and why we use Express js  -->

Express.js is a minimal and flexible web application and node Js
framework for Node.js. It provides a robust set of features for
building web and mobile applications. Express.js simplifies the
process of handling HTTP requests and responses, making it easier to
create web servers and APIs. Here is a brief overview of Express.js:

<!-- why we use Express js and what is the benifit of exprss js...? -->

Basically Expess js handle all the http requests like get, put, post
,delete, and edit, Expess js handle the MiddleWare.

Minimal Setup: Express.js allows you to quickly set up a web server
with minimal configuration. Easy Routing: It provides a simple and
intuitive interface for defining routes for different HTTP methods and
URL paths.

Pre-built Middleware: There is a vast ecosystem of middleware
available for common tasks like parsing request bodies, handling
cookies, logging, and more.

Large Community: Express.js has a large and active community, which
means you can find plenty of tutorials, guides, and community support.

Event-Driven Architecture: It leverages Node.js's event-driven,
non-blocking I/O model, which is ideal for building scalable and
real-time applications. Compatibility: It integrates seamlessly with
other Node.js libraries and tools, providing a cohesive development
environment.

Expres js handle the All type of Api , Express js handle the Axios
method...!

<!-- Lets we talk about the versions -->

version Like Express version is 4.19.2

1st part -> 4

2nd part -> 19

3rd part -> 2

Basically we learn firstly 3rd part of version

3rd part (Last part) - Minnor fixes (optional), in short we can say
that this 3rd part of version have small fix , and when update this
version , the small bug are fix , it is totally depend on you , you
fix it or not, This version is opetional

2nd part Recommended Bug fix (secure Fix) , in shot we can say that
this 2nd part update will be recomanded for every user, its mandatory
to fix it, go to the documentation and update your version

1st part major and breaking upate , this update really change to
execution method , suppose you already know to code write in pervious
version but now your version is 5.0.0 something, and know you don't
know when you write your code is it working or not...? , new version
execution code is maybe different...!

<!-- what is RestfulApi...? -->

Basically Restful apis use curd operations like , get, put, post
,patch and Delete, Suppose we have two sides like 1st side is server
and 2nd side is client, then client sant a req to the server, and
server get the req from the client, in this case server sand the
response , which req sand the client, server sand something type of
data like, text data, image data, video data, jSON data, and other
data, when client get the data, then client decide how to use this
data...!

<!-- Go to the 1st project and see this how all operations works-->

Rest API

Get/users - HTML doucment Render

Get/api/users - LIst all users JSON - Done

Get/api/users/1 - Get the user with ID 1

Get/api/users/2 - Get the user with ID 1

<!-- Basically this is dynamically route , how to empliment it -->

Dynamic Path Parameters

Get /api/users/:id

:id - v=Variable1 | Dynamic
