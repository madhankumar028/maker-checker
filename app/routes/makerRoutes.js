const express = require('express').Router,
    router = express(),
    { authenticateUser, authourizeUser } = require('../middlewares'),
    { MakerController } = require('../controllers');


router.get('/getMediaByArtist', authenticateUser, authourizeUser.authorizeMaker, MakerController.getMediaByArtist);
router.post('/submitMedia', authenticateUser, authourizeUser.authorizeMaker, MakerController.mediaSubmission);

module.exports = router;
