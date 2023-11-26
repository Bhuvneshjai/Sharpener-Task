const express = require('express');
const app2 = express();

// Middleware Function 1
const middleware1 = (req, res, next) => {
    console.log('Middleware 1');
    next(); // Move to the next middleware
}

// Middleware Function 2
const middleware2 = (req, res, next) => {
    console.log('Middleware 2');
    next(); // Move to the next middleware
}

// Router handler
app2.get('/',(req, res) => {
    res.send('Hello ! Express - Next Function');
});

// use of middleware for all routes
app2.use(middleware1);
app2.use(middleware2);

// start the server
app2.listen(3000, () => {
    console.log('server is running on 3000 port');
});