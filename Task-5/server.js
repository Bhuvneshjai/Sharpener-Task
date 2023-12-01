const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

// In-memory storage for usernames (replace this with a database in a real application)
let loggedInUsers = {};

// Load routes from the 'routes' directory
const routes = require('./routes');
// Pass loggedInUsers to routes
app.use((req, res, next) => {
    req.loggedInUsers = loggedInUsers;
    next();
});
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
