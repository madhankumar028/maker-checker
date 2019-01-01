const express = require('express').Router,
    router = express(),
    { AuthController } = require('../controllers');

router.get('/login', AuthController.login);
router.get('/signup', AuthController.signUp);

module.exports = router;
