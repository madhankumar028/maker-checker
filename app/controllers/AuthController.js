const _ = require('lodash'),
    { Users } = require('../models');

module.exports = {
    login: (req, res) => {
        Users.findOne({ emailId: _.get(req.body, 'emailId') }, (err, doc) => {
            if (err) {
                return res.json({
                    err: 'Something went wrong',
                    detail: err
                });
            }

            if (!doc) {
                return res.json({
                    err: 'Email-Id not found'
                })
            }

            if (doc.password === _.get(req.body, 'password')) {
                if (doc.userType === _.get(req.body, 'userType')) {
                    doc.userToken =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                    doc.save((err, updatedUser) => {
                        if (err) {
                            return res.json({
                                err: 'Something went wrong',
                                detail: err
                            });
                        }

                        return res.json({
                            userData: _.pick(updatedUser, ['name', 'emailId', 'userType', 'userToken', '_id'])
                        });
                    })
                }
                else {
                    return res.json({
                        err: 'user type does not match'
                    });
                }
            }
            else {
                return res.json({
                    err: 'wrong password entered'
                });
            }
        });
    },
    signUp: (req, res) => {
        let newUser = new Users(req.body);

        newUser.save((err, doc) => {
            if (err) {
                return res.json({
                    err: 'Something went wrong',
                    detail: err
                });
            }
    
            res.json({
                "auth": "signup",
                "req.body": doc
            })
        })
    }
};
