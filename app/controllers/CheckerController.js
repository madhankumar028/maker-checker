const { Media } = require('../models');

module.exports = {
    pendingRequest: (req, res) => {
        Media.find({ status: 'WAITING_FOR_APPROVAL'}, (err, results) => {
            if (err) {
                return res.json({
                    err: 'Something went wrong',
                    detail: err
                });
            }

            res.json({
                mediaList: results
            });
        })
    },
    updateStatus: (req, res) => {
        Media.updateOne({ _id: _.get(req.body, 'mediaId') }, { status: _.get(req.body, 'status')}, (err, result) => {
            if (err) {
                return res.json({
                    err: 'Something went wrong',
                    detail: err
                });
            }

            res.json({
                status: 'SUCCESS',
                mediaMeta: result
            });
        })
    }
};
