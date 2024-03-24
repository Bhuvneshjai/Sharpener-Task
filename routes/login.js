// routes/login.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');
const bcrypt = require('bcrypt');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* POST login form submission. */
router.post('/', async function(req, res, next) {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).send('Email and password are required');
    }

    // Query the database to retrieve the user with the given email
    const [rows, fields] = await db.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);

    // Check if a user with the given email was found
    if (rows.length === 1) {
      const user = rows[0];
      // Compare the hashed password from the database with the password submitted in the form
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        // Authentication successful
        return res.redirect('/userexpense');
      } else {
        // Invalid password
        return res.status(401).send('Invalid password');
      }
    } else {
      // User not found with the given email
      return res.status(401).send('User not found');
    }
  } catch (err) {
    console.error('Error during login:', err.message);
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
