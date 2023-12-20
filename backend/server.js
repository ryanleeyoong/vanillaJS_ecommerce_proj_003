const express = require("express");
const data = require("./data.js");
const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5001, () =>{
    console.log('serve at http://localhost:5001')
    console.log('products JSON at http://localhost:5001/api/products')
});

/*
Node.js is just a JS runtime that allows us to execute JS code on the
server side. While Node.js has a core module called http that allows us
to create a basic HTTP server. It lacks many features and conveniences
provided by higher-level frameworks like Express.js

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
*/