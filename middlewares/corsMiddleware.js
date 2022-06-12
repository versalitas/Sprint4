const cors = require('cors');

const corsMiddleware = (req, res, next) => {
    cors();
    next();
};

module.export = corsMiddleware;