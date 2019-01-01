const express = require('express').Router,
    router = express(),
    { MakerController } = require('../controllers');


router.get('/getMediaByArtist', MakerController.getMediaByArtist);
router.get('/submitMedia', MakerController.mediaSubmission);

module.exports = router;
