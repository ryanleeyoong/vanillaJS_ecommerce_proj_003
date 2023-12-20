import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestURL } from "./utils.js";

//app.js is the main js file called when index.html is loaded

//Routes is an object containing the route 
const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
    /* 
    When a URL matches the pattern /product/:id, the :id part is 
    considered a variable, and its actual value in a specific URL 
    will be captured and passed to the associated handler or component 
    (ProductScreen in this case). For instance:
    
    '/product/123' would match the route '/product/:id' and pass 123 
    as the value for id.
    
    '/product/abc' would match the route '/product/:id' and pass abc 
    as the value for id.

    */ 
}

/* 
    Router function will:
        1. Get the URL of the page 
        2. When the parseUrl pattern matches a key in the routes object, 
        call the render key in the respective screen object, that will 
        return the values of the anonymous function. 
*/
const router = () =>{

    const request = parseRequestURL();
    const parseUrl = 
        (request.resource ? `/${request.resource}` : '/') + 
        (request.id ? '/:id' : '') +
        (request.verb ? `/${request.verb}` : '');

    const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;
    const main = document.getElementById("main-container");
    main.innerHTML = screen.render();
};

/* 
When the webpage is loaded or there is a change in the url, call the 
router function.
*/
window.addEventListener('load', router);
window.addEventListener('hashchange', router);