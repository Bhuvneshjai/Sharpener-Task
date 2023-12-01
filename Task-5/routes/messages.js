const express = require('express');
const router = express.Router();
const fs = require('fs');

// Middleware to check if the user is logged in
const checkLoggedIn = (req, res, next) => {
    const username = req.loggedInUsers[req.ip];
    if (username) {
        req.username = username;
        next();
    } else {
        res.redirect('/');
    }
};

router.get('/', checkLoggedIn, (req, res) => {
    res.sendFile(__dirname + '/../public/send.html');
});

router.post('/', checkLoggedIn, (req, res) => {
    const username = req.username;
    const enteredMessage = req.body.message;

    const messageData = {
        username: username,
        message: enteredMessage,
    };

    fs.appendFileSync('messages.txt', JSON.stringify(messageData) + '\n');
    res.send('Message sent successfully.');
});

router.get('/all', (req, res) => {
    try {
        const messages = fs.readFileSync('messages.txt', 'utf-8').split('\n').filter(Boolean).map(JSON.parse);
        res.json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
