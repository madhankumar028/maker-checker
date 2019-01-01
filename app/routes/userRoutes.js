const express = require('express').Router,
    router = express(),
    { UserController } = require('../controllers');


router.get('/getAllAvailableMedia', UserController.allMedia);

module.exports = router;
