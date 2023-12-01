const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const enteredUsername = req.body.username;

    if (enteredUsername) {
        // Store the username in the in-memory storage
        req.loggedInUsers[req.ip] = enteredUsername;
        res.redirect('/send');
    } else {
        res.status(400).send('Invalid request. Username is required.');
    }
});

module.exports = router;
