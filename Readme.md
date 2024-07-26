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

<!-- Go to the 1st Project and see how to execute all the functions -->

<!-- What is middlewares...? -->

There are 5 types of middlewares

middleware function sare functions that have access to the request
object (req) the reponse.object (res), and the next middleware
function in the applicatiions request response cycle. The next
middleware functions is commonly denoted by a variable name next

Execute any code.

make changes to the request objects.

End the request response cycle.

Call the next middleware function in the stack.

if the current middleware functions does not end the request response
cyle it must all the next middleware function, Otherwise the request
will be left hanging.

1. Application handling MiddleWares:- Bound to an instance of the app
   object using app.use() or app.METHOD().

2. Route level middleWare:- Bound to an instance of express.Router().

3. Error handling middlewares:- Defined with four arguments: (err,
   req, res, next).

4. Build in middlewares:- Provided by Express.js like express.static,
   express.json, and express.urlencoded.

5. Third party middlewares:- Developed by the community, like
   body-parser, morgan, cors, etc.

<!-- What is Http Hearder in API -->

HTTP headers are an important part of the API request and response as
they represent the meta-data associated with the API request and
response

Hearder carry information for the Resquest and response body.

<!-- HTTP status code -->

we have many HTTP status code here is some information about the
status codes

Informational responses (100 – 199):- There is a status code 100 to
199 who gives you an information is client request and server request.

Successful responses (200 – 299): 200 means your server will be
perfectly run in the browser

Redirection messages (300 – 399):- The request has more than one
possible response. The user agent or user should choose one of them.
(There is no standardized way of choosing one of the responses, but
HTML links to the possibilities are recommended so the user can pick.)

Client error responses (400 – 499):- The server cannot or will not
process the request due to something that is perceived to be a client
error (e.g., malformed request syntax, invalid request message
framing, or deceptive request routing).

Server error responses (500 – 599):- The server has encountered a
situation it does not know how to handle.This error response means
that the server, while working as a gateway to get a response needed
to handle the request, got an invalid response

<!-- How to connect mongoDB -->

Go to the google and search mongodb , click the first link and connect
your google or github account, set your password, and open the mongodb
database, download the mongodb compass and open it , go to the your
online dataBase and on front screen you see the overView, and here you
see the connect button click this button and open the dialog box then
you see the compass option click the compass option and copy the
connect id and past to the compass, and give the password in the link.

<!-- npm i mongoose -->

when you connect your mongoesCompass in your serever then install the
mongoose

Schema - Define the structure

Schema - model

using Model we do CRUD operation for example create, update, delete

There is a dataBase who save your data in a JSON formate. Benifits

1. No SQL document Based Database

2. Strong Support for Aggregation Pipes

3. WOrks on BSON formate

4. Best for Node Applications.

<!-- Lets Talk about MVC -->

MVxC:- model view controller

In Node.js, the MVC (Model-View-Controller) pattern is a popular
architectural pattern used to structure and organize code in web
applications. It divides the application into three interconnected
components:

<!-- Model: -->

Represents the data and the business logic of the application. Manages
the data, logic, and rules of the application. Interacts with the
database and handles data-related tasks. Example: Mongoose models in a
MongoDB setup.

<!-- View: -->

Represents the UI (User Interface) of the application. Displays the
data to the user and sends user commands to the Controller. Often
involves template engines like EJS, Pug, or front-end frameworks like
React or Angular. Example: HTML files or template files that render
data from the Model.

<!-- Controller: -->

Acts as an intermediary between the Model and the View. Processes user
input, interacts with the Model to retrieve or update data, and
renders the appropriate View. Handles routing and application logic.
Example: Express.js route handlers that manage HTTP requests and
responses.

<!-- what is bodyParsers -->

In Node.js, body-parser is a middleware module that helps parse the
body of incoming request objects, making it easier to handle the data
sent in HTTP requests. It is commonly used to parse JSON, URL-encoded,
and other data formats submitted through POST requests.

Key Features:-

1. JSON Parsing: Parses incoming request bodies with JSON payloads.

2. URL-encoded Parsing: Parses incoming request bodies with
   URL-encoded payloads (useful for form submissions).

3. Raw Parsing: Parses incoming request bodies into Buffer objects.

4. Text Parsing: Parses incoming request bodies as strings.

<!-- 2nd Project start -->

URL Shortener

Design a URL shortener service that takes in a valid RUL and returns a
shortened URL redirecting the user to the perviously provided URL.

ALso keep track of total visits/clicks on the URL

Routes

POST/URL - Generates a new short URL and return the shortened URL in
the formate example.com/ randomg-id

Get/:id - Redirects the user to the roginigal URL

Get/URL/analytics/:id - Returns the clicks for the provided shor id.


 