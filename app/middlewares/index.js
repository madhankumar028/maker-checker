const authenticateUser = require('./authenticateUser'),
    emailIdCheck = require('./emailIdCheck'),
    validateLoginPayload = require('./validateLoginPayload');

module.exports = { authenticateUser, emailIdCheck, validateLoginPayload };
