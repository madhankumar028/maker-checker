module.exports = {
    mediaSubmission: (req, res) => {
        res.json({
            "maker": "submit"
        })
    },
    getMediaByArtist: (req, res) => {
        res.json({
            "maker": "getMediaByArtist"
        })
    }
}
