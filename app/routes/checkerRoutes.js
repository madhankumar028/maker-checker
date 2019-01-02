const express = require('express').Router,
    router = express(),
    { authenticateUser } = require('../middlewares'),
    { CheckerController } = require('../controllers');


router.get('/getAllPendingRequests', authenticateUser, CheckerController.pendingRequest);
router.put('/updateMediaStatus', authenticateUser, CheckerController.updateStatus);

module.exports = router;
