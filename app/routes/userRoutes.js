const express = require('express').Router,
    router = express(),
    { authenticateUser, authourizeUser } = require('../middlewares'),
    { UserController } = require('../controllers');


router.get('/getAllAvailableMedia', authenticateUser, authourizeUser.authorizeUser, UserController.allMedia);

module.exports = router;
