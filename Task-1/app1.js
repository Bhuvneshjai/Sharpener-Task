const express = require('express');
const app1 = express();

// Middleware Function
const myMiddleware = (req, res, next) => {
    console.log('This is middleware');
    next(); // move to the next middleware
};

// use the middleware for all routes
app1.use(myMiddleware);

// Route handler
app1.get('/',(req, res) => {
    res.send('Hello ! Express - Middleware Function');
});

// Start the server
app1.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});