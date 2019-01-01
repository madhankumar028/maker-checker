module.exports = {
    login: (req, res) => {
        res.json({
            "auth": "login"
        })
    },
    signUp: (req, res) => {
        res.json({
            "auth": "signup"
        })
    }
};
