const _ = require('lodash'),
    { Media } = require('../models');

module.exports = {
    mediaSubmission: (req, res) => {
        let mediaFile = _.get(req.files, 'mediaFile');
        if (mediaFile) {
            let media = new Media({
                userId: req.userData._id,
                title: _.get(req.body, 'title'),
                status: 'WAITING_FOR_APPROVAL'
            });

            media.save((err, mediaData) => {
                if (err) {
                    return res.json({
                        err: 'Something went wrong'
                    });
                }

                // Use the mv() method to place the file somewhere on your server
                mediaFile.mv(`./media/${mediaData._id}.jpg`, function(err) {
                    if (err) {
                        return res.status(500).send(err);
                    }

                    mediaData.pathOfFile = `/media/${mediaData._id}.jpg`;

                    mediaData.save((err, savedMedia) => {
                        if (err) {
                            return res.json({
                                err: 'something went wrong'
                            });
                        }
                        
                        return res.json({
                            mediaData: savedMedia
                        })
                    });
                });
            })
        }
        else {
            return res.json({
                err: 'file missing',
                reqbody: req.body
            });
        }
    },
    getMediaByArtist: (req, res) => {
        Media.find({ userId: req.userData._id}, (err, result) => {
            if (err) {
                return res.json({
                    err: 'something went wrong'
                });
            }

            return res.json({
                mediaList: result
            });
        });
    }
}
