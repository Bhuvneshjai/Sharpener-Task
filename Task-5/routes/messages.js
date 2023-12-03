// routes/messages.js
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/send', (req, res) => {
    const username = req.cookies.username;
    const message = req.body.message;

    if (username && message) {
        const data = `${username}: ${message}\n`;
        fs.appendFile('messages.txt', data, (err) => {
            if (err) throw err;
            res.send('Message sent successfully!');
        });
    } else {
        res.send('Invalid request!');
    }
});

module.exports = router;
