var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  const { name, email, password, confirm_password } = req.body;

  // validation
  if (!name || !email || !password || !confirm_password) {
    return res.render('index', { title: 'SignUp Page', error: "All fields are required" });
  }

  if (password != confirm_password) {
    return res.render('index', { title: 'SignUp Page', error: "Password do not match"});
  }

  // Hash the password before saving into database
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Save user data to the database
  req.connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], function(error, results, fields) {
    if (error) throw error;

    req.session.username = name;
    res.redirect('/welcome');
  });
});

module.exports = router;
