const express = require('express').Router,
    router = express(),
    { authenticateUser, authourizeUser } = require('../middlewares'),
    { CheckerController } = require('../controllers');


router.get('/getAllPendingRequests', authenticateUser, authourizeUser.authorizeChecker, CheckerController.pendingRequest);
router.put('/updateMediaStatus', authenticateUser, authourizeUser.authorizeChecker, CheckerController.updateStatus);

module.exports = router;
