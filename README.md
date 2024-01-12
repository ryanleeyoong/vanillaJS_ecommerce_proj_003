# Ecommerce VanillaJS project

This project is a code along project with "Coding with Basirs"
VanillaJS ecommerce tutorial. It is aimed to understand the
fundamentals of web development using vanillaJS like:

1. Folder/file Structure
2. Difference between frontend and backend
3. Understanding the technicallities of components found in frontend and backend

_\*Learnings will be written here for note-taking and future reference._

## Node.js

Node.js is just a JS runtime that allows us to execute JS code on the
server side. While Node.js has a core module called http that allows us
to create a basic HTTP server. It lacks many features and conveniences
provided by higher-level frameworks like Express.js

## Express.js

Express.js is a web application framework, and it simplifies the process
of building HTTP servers with Node.js. Express is commonly used as an
HTTP server framework with features like:

1. Routing
2. Middleware (parsing bodies, handling cookies, enabling CORS)
3. Request and Response Handling (has convenient API for working with
   req and res objects)
4. Template Engines
5. Static File Serving
6. Error Handling

## Handle vs Handler

In programming, a handle and a handler are two related but distinct
concepts.

A handle typically refers to a reference or identifier that
allows a program to access or manipulate a resource, such as a file,
memory location, or object. For example, a file handle might be used to
read from or write to a file.

On the other hand, a handler is a piece of code or a function that is
designed to respond to a particular event or situation. For example, an
event handler in a graphical user interface (GUI) program might be
responsible for responding to user input or system events.

So, in summary, a handle is a reference to a resource, while a handler
is a piece of code that responds to events or situations in a program.

## Synchronous vs Asynchronous Clients

This synchronousy and asynchronousy is a property of the Client(front-end)

### Synchronous Client

A synchronous client waits until the function call returns from the server
before excecuting the rest of the code.

### Asynchronous Client

An asynchronous client calls a function and does not wait for it to return
before excecuting the rest of the code.

### JS variable and function hoisting(wtf?)

JS will automatically hoist variables and functions to the top of their scope(local/global)
https://medium.com/@codingsam/hoisting-one-of-the-trickiest-javascript-features-edefb745a058

### JS template literals

### JS map function

### JS Asynchronous operations in the browser

JavaScript is "single-threaded", "non-blocking", and "asynchronous".

Single-threaded: The language can execute only one instrucion at a time

Non-blocking: The language does not wait for a specific previous instruction
to finish before it moves to the next one. This ensures that no instruction
blocks or obstructs the execution of subsequent instructions.

Asynchronous: The language can handle a large number of tasks at a time. It is
a feature of multi-threaded languages, but JS is able to achieve it using with
a single-thread.

The JavaScript Engine: For a browser to interpret JS code it needs to have a JS
Engine, where it can accept JS code, analyse it, and transform it into instructions
the device will understand. You can find the JS V8 Engine in the JS Runtime in
Node.js. The JS runtime is the environment that contains all the resouce necessary
for the execution of a JS program.

Chrome: V8 Engine
Firefox: Spidermonkey
Safari: JavaScriptCore

Call stack
It is a "Stack" data structure that operates with two key operations.
"Push" and "Pop". Push adds new functions to the top of the stack. Pop
removes a function from the top of the stack. It works like (LIFO) last
in first out. When JS engine receives JS code, it parses the code and places
the first function it encounters(that is called) into the call stack.
And if the JS engine notices the functions calls other functions, it will
stack it on top of the call stack.

Asynchronous operations and web APIs
Whenever JS encounters asynchronous instructions like requests to third-party
sites, or timer-based actions, it seeks assistance. To achieve this, JavaScript
uses the browser’s provided Web Application Programming Interfaces (Web APIs).
The Web APIs are a set of functions provided by the browser that the JavaScript
engine can utilize. They include examples such as Document Object Model (DOM)
manipulation methods, fetch, setInterval, setTimeout, promises, async-await
functions, and more.

Callbacks
A callback is any function that is a parameter of an async function,
which the async function invokes to complete its operation. It's important,
because when the async function completes it's process and returns the data,
the callback function is called to do an action with the data.

Callback queue
The callback functions that will be excuted when the async function
completes will be added to the callback queue. It is a "Queue" data structure
which works with the First In First Out (FIFO) approach. This means that
the first callback added to that queue is going to be the first callback
to leave.

Event loops
The event loop is a loop that continuously "checks if the call stack is empty".
When the call stack is not empty, it allows the ongoing process to continue.
But "when the call stack becomes empty", the "event loop fetches the task at
the top of the callback queue" and "adds it to the call stack".
The event loop runs continuously as long as the program is running,
always performing its function until the callback queue is completely empty.

https://www.freecodecamp.org/news/javascript-asynchronous-operations-in-the-browser/

### How promises work in JS

Callback Pyramid of Doom

https://www.freecodecamp.org/news/guide-to-javascript-promises/#:~:text=In%20JavaScript%2C%20a%20Promise%20is,of%20promises%20in%20real%20life.

### Webpack

Webpack is used to combine the many JS files in your app into one main.js file

## Axios

Using Axios is better then fetch (will research why later) to do AJAX requests

### Babel Transpiler

Babel is a compiler that translates ES6 to ES5 (Transpiler). It is used
to transpile ES6 into traditional JS(ES5). This used to be more relevent
back in 2016 - 2018 when Node still does not have wide support for ES6.
We now also have alternatives like TypeScript compiler.

### Code linting

Code linting helps developers find errors faster like red underline.

### JS Local Storage vs Session Storage vs Cookies

localStorage is a property that allows JavaScript sites and apps to save
key-value pairs in a web browser with no expiration date. This means the
data stored persists even after the user closes the browser or restarts
the computer.

localStorage is a window object property, which makes it a global object
that can interact with and manipulate the browser window. It can also be
used in combination with other window properties and methods.

### Window Object

The window object represents an open window in a browser.
If a document contain frames (<iframe> tags), the browser creates one
window object for the HTML document, and one additional window object
for each frame.

### JS Three Dot Operator
