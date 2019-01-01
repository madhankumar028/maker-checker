const express = require('express').Router,
    router = express(),
    { CheckerController } = require('../controllers');


router.get('/getAllPendingRequests', CheckerController.pendingRequest);
router.get('/updateMediaStatus', CheckerController.updateStatus);

module.exports = router;
