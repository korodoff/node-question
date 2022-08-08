NPM - Node Package Manager
Node Package Manager (NPM) is a command line tool that installs, updates or uninstalls Node.js 

packages in your application. It is also an online repository for open-source Node.js packages. 

The node community around the world creates useful modules and publishes them as packages in this repository.


Node.js Module
Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can
 be reused throughout the Node.js application.

Each module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope.
 Also, each module can be placed in a separate .js file under a separate folder.


Module.exports
The main purpose of module.exports is to achieve modular programming. Modular programming refers to separating the 

functionality of a program into independent, interchangeable modules, such that each contains everything necessary 
to execute only one aspect of the desired functionality. By not using module.exports it becomes difficult to write a
 large program without modular/reusable code.




Named Export: (export)

With named exports, one can have multiple named exports per file. Then import the specific exports they want surrounded 
in braces. The name of imported module has to be the same as the name of the exported module.


module.exports.getcontroller=get


Default Export: (export default)

One can have only one default export per file. When we import we have to specify a name and import like:

Named exports are useful to export several values. During the import, one will be able to use the same name to refer 
to the corresponding value.

module.exports=get




How do you import any module in Node.js


The result returned by require() is stored in a variable which is used to invoke the functions using the dot notation.

In NodeJS, require() is a built-in function to include external modules that exist in separate files.
 require() statement basically reads a JavaScript file, executes it, and then proceeds to return the export object. 
const f = require('./func');


What are the different types of HTTP requests?

HTTP (Hypertext Transfer Protocol) specifies a collection of request methods to specify what action is to be performed on a particular resource. The most commonly used HTTP request methods are GET, POST, PUT, PATCH, and DELETE. These are equivalent to the CRUD operations (create, read, update, and delete).
GET: GET request is used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.

POST: POST request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.

PUT: A PUT request is used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload. If there are no resources that match the request, it will generate one.

PATCH: PATCH is similar to PUT request, but the only difference is, it modifies a part of the data. It will only replace the content that you want to update.

DELETE: A DELETE request is used to delete the data on the server at a specified location.

Explain the concept of middleware in Node.js. Explain CORS
Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle.

Middleware gets executed after the server receives the request and before the controller actions send the response.

Middleware has the access to the request object, responses object, and next, it can process the request before the server send a response. An Express-based application is a series of middleware function calls.

Middleware Chaining: Middleware can be chained from one to another, Hence creating a chain of functions that are executed in order. The last function sends the response back to the browser. So, before sending the response back to the browser the different middleware process the request.

The next() function in the express is responsible for calling the next middleware function if there is one.

app.get(path, (req, res, next) => {}, (req, res) => {})

CORS

CORS (Cross-Origin Resource Sharing) is a mechanism by which data or any other resource of a site could be shared intentionally to a third party website when there is a need. Generally, access to resources that are residing in a third party site is restricted by the browser clients for security purposes.

function httpGetAction(urlLink) { var xmlHttp = new XMLHttpRequest(); xmlHttp.open( "GET", urlLink, false ); xmlHttp.send(); return xmlHttp.responseText; }

npm i CORS




