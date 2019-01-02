const express = require('express').Router,
    router = express(),
    { authenticateUser } = require('../middlewares'),
    { MakerController } = require('../controllers');


router.get('/getMediaByArtist', authenticateUser, MakerController.getMediaByArtist);
router.post('/submitMedia', authenticateUser, MakerController.mediaSubmission);

module.exports = router;
