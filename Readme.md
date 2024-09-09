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

<!-- What is Authentication -->

Authentication in Node.js refers to the process of verifying the
identity of a user or system. It is a crucial part of web application
security to ensure that only authorized users can access certain
resources or perform specific actions. Here are the key concepts and
methods for implementing authentication in a Node.js application:

Authentications has two patterns:-

1. Statefull:- which maintains state or data or server side

2. Stateless:- Which has no state

<!-- -------------------------------------------------------------------------------------------------- -->

Here are 100 Node.js questions and answers ranging from basic to
advanced, including practical examples:

<!-- -------------------------------------------------------------------------------------------------- -->

Basic Level

<!-- -------------------------------------------------------------------------------------------------- -->

What is Node.js?

Answer: Node.js is a JavaScript runtime built on Chrome's V8
JavaScript engine, allowing you to run JavaScript on the server-side.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you install Node.js?

Answer: You can install Node.js by downloading the installer from
nodejs.org or using a package manager like nvm, brew, or apt.

<!-- -------------------------------------------------------------------------------------------------- -->

What is npm?

Answer: npm stands for Node Package Manager. It's the default package
manager for Node.js, allowing you to manage project dependencies.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you create a basic HTTP server in Node.js?

Answer: javascript Copy code const http = require('http');

const server = http.createServer((req, res) => { res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain'); res.end('Hello World\n');
});

server.listen(3000, () => { console.log('Server running at
http://localhost:3000/'); });

<!-- -------------------------------------------------------------------------------------------------- -->

What is the purpose of the package.json file?

Answer: The package.json file contains metadata about the project,
including dependencies, scripts, and versioning.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you initialize a Node.js project?

Answer: Run npm init in the terminal and follow the prompts to create
a package.json file.

<!-- -------------------------------------------------------------------------------------------------- -->

What are modules in Node.js?

Answer: Modules are reusable blocks of code that can be imported into
other modules using require(). How do you export a function from a
Node.js module?

Answer: javascript Copy code // myModule.js function greet(name) {
return `Hello, ${name}`; } module.exports = greet;

<!-- -------------------------------------------------------------------------------------------------- -->

How do you import and use an exported module in Node.js?

Answer: javascript Copy code const greet = require('./myModule');
console.log(greet('Ankit'));

<!-- -------------------------------------------------------------------------------------------------- -->

What is require() in Node.js?

Answer: require() is a built-in function used to import modules in
Node.js.

<!-- -------------------------------------------------------------------------------------------------- -->

What is the difference between require() and import?

Answer: require() is used in CommonJS modules, while import is used in
ES6 modules. Node.js supports both, but ES6 modules are newer and
offer more features.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you handle asynchronous operations in Node.js?

Answer: Asynchronous operations can be handled using callbacks,
Promises, or async/await.

<!-- -------------------------------------------------------------------------------------------------- -->

What is a callback function in Node.js?

Answer: A callback function is a function passed as an argument to
another function and is executed after the completion of the
asynchronous operation.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you read a file asynchronously in Node.js?

Answer: javascript Copy code const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => { if (err) {
console.error(err); return; } console.log(data); });

<!-- -------------------------------------------------------------------------------------------------- -->

What is a Promise in Node.js?

Answer: A Promise represents the eventual completion (or failure) of
an asynchronous operation and its resulting value.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you create a Promise in Node.js?

Answer: javascript Copy code const myPromise = new Promise((resolve,
reject) => { const success = true; if (success) { resolve('Operation
succeeded'); } else { reject('Operation failed'); } });

<!-- -------------------------------------------------------------------------------------------------- -->

How do you handle errors in Node.js?

Answer: Errors can be handled using try/catch blocks for synchronous
code, or using .catch() for Promises and async/await.

<!-- -------------------------------------------------------------------------------------------------- -->

What is async/await in Node.js?

Answer: async/await is a modern way to handle asynchronous operations
in a more synchronous-looking code, making it easier to read and
maintain.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you create an async function in Node.js?

Answer: javascript Copy code async function fetchData() { try { const
data = await someAsyncFunction(); console.log(data); } catch (error) {
console.error(error); } }

<!-- -------------------------------------------------------------------------------------------------- -->

How do you install a Node.js package globally?

Answer: Use the -g flag with npm install, e.g., npm install -g
nodemon.

<!-- -------------------------------------------------------------------------------------------------- -->

What is nodemon and how do you use it?

Answer: nodemon is a tool that automatically restarts your Node.js
application when file changes are detected. Run your app with nodemon
instead of node, e.g., nodemon app.js.

<!-- -------------------------------------------------------------------------------------------------- -->

What are streams in Node.js?

Answer: Streams are objects that let you read data from a source or
write data to a destination in a continuous manner.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you create a readable stream in Node.js?

Answer: javascript Copy code const fs = require('fs'); const
readStream = fs.createReadStream('example.txt', 'utf8');
readStream.on('data', chunk => { console.log(chunk); });

<!-- -------------------------------------------------------------------------------------------------- -->

What is event-driven programming in Node.js?

Answer: Event-driven programming is a programming paradigm where the
flow of the program is determined by events such as user actions,
sensor outputs, or messages from other programs.

<!-- -------------------------------------------------------------------------------------------------- -->

What is the EventEmitter class in Node.js?

Answer: EventEmitter is a class that facilitates the creation and
handling of custom events in Node.js.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you create and handle events using EventEmitter in Node.js?

Answer: javascript Copy code const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', () => { console.log('Hello World!'); });

eventEmitter.emit('greet');

<!-- -------------------------------------------------------------------------------------------------- -->

What is the difference between process.nextTick() and setImmediate()?

Answer: process.nextTick() schedules a callback to be invoked in the
current phase of the event loop, while setImmediate() schedules it for
the next iteration.

<!-- -------------------------------------------------------------------------------------------------- -->

What is middleware in Node.js?

Answer: Middleware is a function that receives the request and
response objects and can make changes to them, end the
request-response cycle, or pass control to the next middleware.

<!-- -------------------------------------------------------------------------------------------------- -->

What is the buffer in Node.js?

Answer: A Buffer is a raw binary data storage that can be used to
manipulate binary data directly.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you convert a string to a buffer in Node.js?

Answer: javascript Copy code const buf = Buffer.from('Hello World',
'utf8'); console.log(buf);

<!-- -------------------------------------------------------------------------------------------------- -->

What is the difference between readFile and createReadStream?

Answer: readFile reads the entire file into memory before returning
it, while createReadStream reads the file in chunks, which is more
memory efficient for large files.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you handle exceptions in Node.js?

Answer: Exceptions can be handled using try/catch blocks for
synchronous code, and .catch() for Promises. Additionally, the
uncaughtException event can be used to handle unhandled exceptions
globally.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you update Node.js to the latest version?

Answer: You can update Node.js using a version manager like nvm, or by
reinstalling from nodejs.org.

<!-- -------------------------------------------------------------------------------------------------- -->

What is the difference between spawn and exec in Node.js?

Answer: spawn starts a new process and streams the output, while exec
starts a new process and buffers the output into a single callback.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you write to a file in Node.js?

Answer: javascript Copy code const fs = require('fs');
fs.writeFile('example.txt', 'Hello World', err => { if (err) {
console.error(err); } });

<!-- -------------------------------------------------------------------------------------------------- -->

What is the purpose of the crypto module in Node.js?

Answer: The crypto module provides cryptographic functionality such as
hashing, encryption, and decryption. How do you hash a password using
the crypto module in Node.js?

Answer: javascript Copy code const crypto = require('crypto'); const
hash = crypto.createHash('sha256').update('password').digest('hex');
console.log(hash);

<!-- -------------------------------------------------------------------------------------------------- -->

What is the purpose of the http module in Node.js?

Answer: The http module provides the functionality to create HTTP
servers and clients.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you make an HTTP request in Node.js?

Answer: javascript Copy code const http = require('http');

http.get('http://example.com', res => { let data = ''; res.on('data',
chunk => { data += chunk; }); res.on('end', () => { console.log(data);
}); });

<!-- -------------------------------------------------------------------------------------------------- -->

What is the difference between http and https in Node.js?

Answer: https is the secure version of http that uses TLS/SSL
encryption for communication. Intermediate Level

<!-- -------------------------------------------------------------------------------------------------- -->

What is Express.js?

Answer: Express.js is a fast, unopinionated, and minimalist web
framework for Node.js.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you create a basic Express.js server?

Answer: javascript Copy code const express = require('express'); const
app = express();

app.get('/', (req, res) => { res.send('Hello World'); });

app.listen(3000, () => { console.log('Server running on port 3000');
});

<!-- -------------------------------------------------------------------------------------------------- -->

How do you handle POST requests in Express.js?

Answer: javascript Copy code app.post('/submit', (req, res) => {
res.send('Received a POST request'); });

<!-- -------------------------------------------------------------------------------------------------- -->

What is the body-parser middleware used for in Express.js?

Answer: body-parser is used to parse incoming request bodies, making
the data available under req.body.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you serve static files in Express.js?

Answer: javascript Copy code app.use(express.static('public'));

<!-- -------------------------------------------------------------------------------------------------- -->

What is the purpose of next() in Express.js?

Answer: next() passes control to the next middleware function in the
stack.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you handle errors in Express.js?

Answer: You can handle errors using error-handling middleware, which
has four parameters: (err, req, res, next).

<!-- -------------------------------------------------------------------------------------------------- -->

What is middleware chaining in Express.js?

Answer: Middleware chaining is the process of passing control from one
middleware function to the next using next().

<!-- -------------------------------------------------------------------------------------------------- -->

How do you set up route parameters in Express.js?

Answer: javascript Copy code app.get('/user/:id', (req, res) => {
res.send(`User ID: ${req.params.id}`); });

<!-- -------------------------------------------------------------------------------------------------- -->

How do you handle query parameters in Express.js?

Answer: javascript Copy code app.get('/search', (req, res) => { const
query = req.query.q; res.send(`Search query: ${query}`); });

<!-- -------------------------------------------------------------------------------------------------- -->

What is CORS in Node.js and how do you handle it?

Answer: CORS (Cross-Origin Resource Sharing) is a security feature
that restricts resources on a web page to be requested from another
domain. You can handle it using the cors middleware: javascript Copy
code const cors = require('cors'); app.use(cors());

<!-- -------------------------------------------------------------------------------------------------- -->

What is mongoose in Node.js?

Answer: mongoose is an ODM (Object Data Modeling) library for MongoDB
and Node.js, which provides a schema-based solution to model your
application data.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you connect to a MongoDB database using mongoose?

Answer: javascript Copy code const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser:
true, useUnifiedTopology: true, });

<!-- -------------------------------------------------------------------------------------------------- -->

How do you define a schema in mongoose?

Answer: javascript Copy code const Schema = mongoose.Schema;

const userSchema = new Schema({ name: String, email: String, password:
String, });

const User = mongoose.model('User', userSchema);

<!-- -------------------------------------------------------------------------------------------------- -->

How do you create a new document in mongoose?

Answer: javascript Copy code const newUser = new User({ name: 'Ankit',
email: 'ankit@example.com', password: 'password123', });

newUser.save().then(user => console.log(user));

<!-- -------------------------------------------------------------------------------------------------- -->

How do you find documents in mongoose?

Answer: javascript Copy code User.find({ name: 'Ankit' }).then(users
=> console.log(users));

<!-- -------------------------------------------------------------------------------------------------- -->

How do you update a document in mongoose?

Answer: javascript Copy code User.updateOne({ name: 'Ankit' }, {
email: 'newemail@example.com' }).then(result => console.log(result));

<!-- -------------------------------------------------------------------------------------------------- -->

How do you delete a document in mongoose?

Answer: javascript Copy code User.deleteOne({ name: 'Ankit'
}).then(result => console.log(result));

<!-- -------------------------------------------------------------------------------------------------- -->

What is JWT and how do you use it in Node.js?

Answer: JWT (JSON Web Token) is a compact, URL-safe token used for
authentication and information exchange. You can use the jsonwebtoken
package for generating and verifying JWTs.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you generate a JWT in Node.js?

Answer: javascript Copy code const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: user.\_id }, 'secretkey', { expiresIn:
'1h' }); console.log(token);

<!-- -------------------------------------------------------------------------------------------------- -->

How do you verify a JWT in Node.js?

Answer: javascript Copy code jwt.verify(token, 'secretkey', (err,
decoded) => { if (err) { console.error(err); } else {
console.log(decoded); } });

<!-- -------------------------------------------------------------------------------------------------- -->

What is bcrypt and how do you use it in Node.js?

Answer: bcrypt is a library for hashing passwords and comparing hashed
passwords.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you hash a password using bcrypt?

Answer: javascript Copy code const bcrypt = require('bcrypt'); const
saltRounds = 10;

bcrypt.hash('password123', saltRounds, (err, hash) => { if (err) throw
err; console.log(hash); });

<!-- -------------------------------------------------------------------------------------------------- -->

How do you compare a hashed password with a plain password using
bcrypt?

Answer: javascript Copy code bcrypt.compare('password123', hash, (err,
result) => { if (err) throw err; console.log(result); // true or false
});

<!-- -------------------------------------------------------------------------------------------------- -->

What is Socket.io and how do you use it in Node.js?

Answer: Socket.io is a library that enables real-time, bidirectional
communication between web clients and servers.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you set up a basic Socket.io server in Node.js?

Answer: javascript Copy code const io = require('socket.io')(3000);

io.on('connection', socket => { console.log('New connection');
socket.emit('message', 'Welcome to the server'); });

<!-- -------------------------------------------------------------------------------------------------- -->

What is clustering in Node.js and how do you implement it?

Answer: Clustering allows you to create child processes that share the
same server port to handle more requests efficiently. You can use the
cluster module: javascript Copy code const cluster =
require('cluster'); const http = require('http'); const numCPUs =
require('os').cpus().length;

if (cluster.isMaster) { for (let i = 0; i < numCPUs; i++) {
cluster.fork(); } } else { http.createServer((req, res) => {
res.writeHead(200); res.end('Hello World'); }).listen(8000); }

<!-- -------------------------------------------------------------------------------------------------- -->

What is PM2 and how do you use it in Node.js?

Answer: PM2 is a process manager for Node.js that helps you manage and
monitor your applications, ensuring they are always running. Install
it globally with npm install -g pm2 and start your app with pm2 start
app.js.

<!-- -------------------------------------------------------------------------------------------------- -->

What are environment variables in Node.js and how do you use them?

Answer: Environment variables are used to store configuration settings
outside the application code. You can access them using process.env:
javascript Copy code const port = process.env.PORT || 3000;

<!-- -------------------------------------------------------------------------------------------------- -->

How do you use dotenv to manage environment variables in Node.js?

Answer: Install dotenv and create a .env file: javascript Copy code
require('dotenv').config(); const port = process.env.PORT;

<!-- -------------------------------------------------------------------------------------------------- -->

What is the path module in Node.js?

Answer: The path module provides utilities for working with file and
directory paths.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you join two paths in Node.js?

Answer: javascript Copy code const path = require('path'); const
fullPath = path.join(\_\_dirname, 'public', 'index.html');

<!-- -------------------------------------------------------------------------------------------------- -->

How do you get the extension of a file in Node.js?

Answer: javascript Copy code const ext = path.extname('example.txt');
console.log(ext); // .txt

<!-- -------------------------------------------------------------------------------------------------- -->

What is cluster.fork() used for in Node.js?

Answer: cluster.fork() is used to create a new worker process in a
Node.js cluster.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you handle worker process communication in Node.js?

Answer: You can use process.send() and process.on('message') to handle
inter-process communication between the master and worker processes.

<!-- -------------------------------------------------------------------------------------------------- -->

What is the difference between process.exit() and process.kill() in
Node.js?

Answer: process.exit() exits the current process, while process.kill()
sends a signal to a specific process, which may terminate it depending
on the signal sent.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you prevent blocking the event loop in Node.js?

Answer: Avoid using synchronous code for I/O operations and prefer
asynchronous methods like callbacks, Promises, or async/await.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you implement pagination in a Node.js application?

Answer: You can use query parameters like page and limit to fetch a
subset of results: javascript Copy code app.get('/items', (req, res)
=> { const page = parseInt(req.query.page) || 1; const limit =
parseInt(req.query.limit) || 10; const skip = (page - 1) \* limit;
Item.find().skip(skip).limit(limit).then(items => res.json(items));
});

<!-- -------------------------------------------------------------------------------------------------- -->

What is Hapi.js?

Answer: Hapi.js is a rich framework for building applications and
services in Node.js. It provides powerful configuration options,
routing, and plugin support.

<!-- -------------------------------------------------------------------------------------------------- -->

What is Koa.js?

Answer: Koa.js is a next-generation web framework for Node.js,
designed to be smaller, more expressive, and robust than Express.js.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you deploy a Node.js application to Heroku?

Answer: Install the Heroku CLI, login with heroku login, create an app
with heroku create, and deploy with git push heroku main.

<!-- -------------------------------------------------------------------------------------------------- -->

What is WebSocket and how do you implement it in Node.js?

Answer: WebSocket is a protocol for two-way communication between a
client and a server. You can implement it using the ws package:
javascript Copy code const WebSocket = require('ws'); const wss = new
WebSocket.Server({ port: 8080 });

wss.on('connection', ws => { ws.on('message', message => {
console.log(`Received: ${message}`); }); ws.send('Hello from server');
});

<!-- -------------------------------------------------------------------------------------------------- -->

How do you implement file upload in Node.js?

Answer: Use the multer middleware for handling file uploads:
javascript Copy code const multer = require('multer'); const upload =
multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
res.send('File uploaded successfully'); });

<!-- -------------------------------------------------------------------------------------------------- -->

How do you set up a cron job in Node.js?

Answer: You can use the node-cron package to schedule tasks:
javascript Copy code const cron = require('node-cron');

cron.schedule('0 0 \* \* \*', () => { console.log('Running a task
every day at midnight'); });

<!-- -------------------------------------------------------------------------------------------------- -->

What is the difference between res.send() and res.json() in
Express.js?

Answer: res.send() can send a response in any format, while res.json()
specifically formats the response as JSON and sets the appropriate
Content-Type header.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you implement rate limiting in Node.js?

Answer: Use the express-rate-limit middleware: javascript Copy code
const rateLimit = require('express-rate-limit'); const limiter =
rateLimit({ windowMs: 15 _ 60 _ 1000, // 15 minutes max: 100, // limit
each IP to 100 requests per window }); app.use(limiter);

<!-- -------------------------------------------------------------------------------------------------- -->

How do you integrate Redis with a Node.js application?

Answer: Use the redis package to connect to a Redis instance:
javascript Copy code const redis = require('redis'); const client =
redis.createClient();

client.on('connect', () => { console.log('Connected to Redis'); });

<!-- -------------------------------------------------------------------------------------------------- -->

What is the pm2 ecosystem.config.js file used for?

Answer: The ecosystem.config.js file is used to define multiple
applications, environment variables, and advanced options for managing
processes with PM2.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you use Web Workers in Node.js?

Answer: Node.js provides the worker_threads module for
multi-threading: javascript Copy code const { Worker } =
require('worker_threads');

const worker = new Worker('./worker.js'); worker.on('message', message
=> console.log(message));

<!-- -------------------------------------------------------------------------------------------------- -->

What is Express Router and how do you use it?

Answer: Express Router allows you to modularize routes in your
application: javascript Copy code const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => { res.send('User route'); });

app.use('/api', router);

<!-- Advanced Level -->

What are microservices and how do you implement them in Node.js?

Answer: Microservices are small, independent services that work
together to form a larger application. In Node.js, you can implement
them using separate apps that communicate via APIs, message queues, or
event streams.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you handle file streams and pipe operations in Node.js?

Answer: javascript Copy code const fs = require('fs');

const readStream = fs.createReadStream('input.txt'); const writeStream
= fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

<!-- -------------------------------------------------------------------------------------------------- -->

What is the event loop in Node.js and how does it work?

Answer: The event loop is a mechanism in Node.js that handles
asynchronous operations. It continuously checks the event queue and
processes callbacks from completed operations.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you implement a RESTful API in Node.js?

Answer: Using Express.js, you can define routes corresponding to CRUD
operations and use HTTP methods like GET, POST, PUT, DELETE to
implement a RESTful API.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you optimize a Node.js application for performance?

Answer: Optimize your app by using asynchronous programming,
clustering, caching, avoiding memory leaks, and monitoring performance
with tools like pm2 and New Relic.

<!-- -------------------------------------------------------------------------------------------------- -->

What is the async_hooks module in Node.js?

Answer: The async_hooks module provides an API to track the lifecycle
of asynchronous operations in a Node.js application, helping to
monitor performance or debug issues.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you debug a Node.js application?

Answer: You can use the built-in Node.js debugger by running node
inspect app.js or use tools like ndb, Chrome DevTools, or vscode's
debugging features.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you set up WebSockets with clustering in Node.js?

Answer: You can use sticky-session or uws to ensure that WebSocket
connections are consistently handled by the same worker in a clustered
Node.js application.

<!-- -------------------------------------------------------------------------------------------------- -->

What are worker_threads in Node.js and when should you use them?

Answer: worker_threads allow you to run JavaScript in parallel
threads. They should be used for CPU-intensive tasks that would
otherwise block the event loop.

<!-- -------------------------------------------------------------------------------------------------- -->

How do you handle memory leaks in a Node.js application?

- Answer: To handle memory leaks, you can use tools like clinic.js,
  node --inspect, and heapdump to monitor memory usage, analyze heap
  snapshots, and identify issues like unused or retained objects.

<!-- -------------------------------------------------------------------------------------------------- -->

These questions and answers should provide a comprehensive guide to
learning Node.js, from basic concepts to advanced features.
