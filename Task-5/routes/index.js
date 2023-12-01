const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const messageRoutes = require('./messages');

router.use('/login', authRoutes);
router.use('/send', messageRoutes);

module.exports = router;
