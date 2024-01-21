// routes/login.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* POST login form submission. */
router.post('/', async function(req, res, next) {
  try {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).send('Username and password are required');
    }

    // Query the database to check if the user exists with the given credentials
    const [rows, fields] = await db.execute('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

    // Check if a user with the given credentials was found
    if (rows.length === 1) {
      // Authentication successful
      return res.send(`Login successful! Welcome, ${username}!`);
    } else {
      // Authentication failed
      return res.status(401).send('Invalid username or password');
    }
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
