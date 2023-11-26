const http = require('http');
const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log('Middlelayer-1'); //allow request to send it to on next middleware.
    next();
});

app.use((req,res,next) => {
    console.log('Middlelayer-2');
    res.send('<h1>Hello from Bhuvnesh Jain !</h1>')
});

const server = http.createServer(app);
server.listen(3000);