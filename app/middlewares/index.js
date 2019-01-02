const authenticateUser = require('./authenticateUser'),
    emailIdCheck = require('./emailIdCheck'),
    authourizeUser = require('./authourizeUser'),
    validateLoginPayload = require('./validateLoginPayload');

module.exports = { authenticateUser, emailIdCheck, validateLoginPayload, authourizeUser };
