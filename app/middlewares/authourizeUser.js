module.exports = {
    authorizeUser: (req, res, next) => {
        if (req.userData.userType === 'USER') {
            next();
        }

        return res.json({
            err: 'Not authorize to access this route'
        });
    },

    authorizeMaker: (req, res, next) => {
        if (req.userData.userType === 'MAKER') {
            next();
        }

        return res.json({
            err: 'Not authorize to access this route'
        });
    },

    authorizeChecker: (req, res, next) => {
        if (req.userData.userType === 'CHECKER') {
            next();
        }

        return res.json({
            err: 'Not authorize to access this route'
        });
    }
}