const express = require('express').Router,
    router = express(),
    { authenticateUser } = require('../middlewares'),
    { UserController } = require('../controllers');


router.get('/getAllAvailableMedia', authenticateUser, UserController.allMedia);

module.exports = router;
