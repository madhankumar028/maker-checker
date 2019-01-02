const _ = require('lodash'),
    { Users } = require('../models')

module.exports = (req, res, next) => {
    if (_.get(req.headers, 'usertoken')) {
        Users.findOne({ userToken: _.get(req.headers, 'usertoken')}, (err, userData) => {
            if (err) {
                return res.json({
                    err: 'something went wrong',
                    detail: err
                });
            }

            if (userData) {
                req.userData = userData;
                return next();
            }
            else {
                return res.json({
                    err: 'Token invalid'
                })
            }
        });
    }
    else {
        return res.json({
            err: 'User token missing'
        });
    }
};
