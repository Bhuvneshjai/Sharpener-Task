// routes/index.js
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login', (req, res) => {
    const loginPath = path.join(__dirname, '/../public/login.html');
    res.sendFile(loginPath);
});

router.post('/login', (req, res) => {
    const { username } = req.body;
    if (username) {
        res.cookie('username', username);
        res.redirect('/chat');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
