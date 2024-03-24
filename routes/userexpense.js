const express = require('express');
const router = express.Router();
const db = require('../models/db');

/* GET user expenses page. */
router.get('/', async function(req, res, next) {
  try {
    // Fetch user data from session
    const { user } = req.session;
    console.log('User session:', user); // Check if user session data is available

    if (!user) {
      return res.redirect('/login');
    }

    // Fetch user expenses from the database
    const [expenses, fields] = await db.execute('SELECT * FROM expenses WHERE user_id = ?', [user.id]);
    console.log('User expenses:', expenses); // Check if user expenses are fetched correctly

    res.render('userexpense', { title: 'User Expenses', user, expenses });
  } catch (err) {
    console.error('Error fetching user expenses:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
