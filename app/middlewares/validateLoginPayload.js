const _ = require('lodash');

module.exports = (req, res, next) => {
    if (_.has(req.body, 'email') && _.has(req.body, 'password') && _.has(req.body, 'userType')) {
        return next();   
    }

    return res.json({
        err: 'invalid payload'
    });
};
