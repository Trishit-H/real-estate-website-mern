const express = require('express');

const { handleSignup } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup', handleSignup);

module.exports = router;