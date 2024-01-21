// routes/index.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const db = require('../models/db');

const getRandomImage = () => {
  const imagesPath = path.join(__dirname, '../public/images');
  const images = fs.readdirSync(imagesPath);
  
  if (images.length === 0) {
    console.error('No images found in the public/images folder.');
    return '';
  }

  const randomIndex = Math.floor(Math.random() * images.length);
  return `/images/${images[randomIndex]}`;
};

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    // Check database connection
    await db.execute('SELECT 1');
    
    res.render('index', { title: 'Expense Tracker App', getRandomImage });
  } catch (err) {
    console.error('Database connection error:', err.message);
    res.render('error', { message: 'Database connection error', error: err });
  }
});

module.exports = router;
