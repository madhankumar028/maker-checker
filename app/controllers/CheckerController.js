module.exports = {
    pendingRequest: (req, res) => {
        res.json({
            "checker": "pendingRequest"
        })
    },
    updateStatus: (req, res) => {
        res.json({
            "checker": "updateStatus"
        })
    }
};
