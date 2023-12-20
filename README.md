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
