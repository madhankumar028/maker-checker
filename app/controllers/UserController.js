const { Media } = require('../models');

module.exports = {
    allMedia: (req, res) => {
        Media.find({ status: 'APPROVED'}, (err, results) => {
            if (err) {
                return res.json({
                    err: 'Something went wrong',
                    detail: err
                });
            }

            res.json({
                mediaList: results
            });
        });
    }
}
