// routes/signup.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // For password hashing
const db = require('../models/db');

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

/* POST signup form submission. */
router.post('/', async function(req, res, next) {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Validate form data
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).send('All fields are required');
    }

    if (password !== confirmPassword) {
      return res.status(400).send('Passwords do not match');
    }

    // Check if the user with the given email already exists
    const [existingUsers] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUsers.length > 0) {
      return res.status(400).send('User with this email already exists');
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user data to the database
    await db.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);

    // For now, let's just send a response
    res.send(`Sign Up successful! Welcome, ${name}!`);
  } catch (err) {
    console.error('Error during signup:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
