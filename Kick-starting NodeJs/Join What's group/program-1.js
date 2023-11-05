const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, I am Bhuvnesh Jain');
});

server.listen(4000, () => {
    console.log("Server is running on port 4000");
});

/* To access the Node.js server you created on the web, follow these steps:
Make sure your Node.js server code is running on your local machine. You should see the message 
"Server is running on port 4000" in your console.
Open a web browser.
In the browser's address bar, type the following URL: http://localhost:4000.
Press Enter. */

