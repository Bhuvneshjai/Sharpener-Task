var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Signup Page' });
});

router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'welcome', username: req.session.username });
});

module.exports = router;
