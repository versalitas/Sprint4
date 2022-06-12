
const noCache = (req, res, next) => {
    res.header('Cache-Control', 'no-cache');
    next()
}

module.exports = noCache;