const express = require('express').Router,
    router = express(),
    { AuthController } = require('../controllers'),
    { emailIdCheck, validateLoginPayload } = require('../middlewares');

router.post('/login', validateLoginPayload, AuthController.login);
router.post('/signup', emailIdCheck, AuthController.signUp);

module.exports = router;
