//https://www.securecoding.com/blog/jwt-expressjs/
//https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

const jwt = require('jsonwebtoken');
const jwtSecretToken = process.env.TOKEN_SECRET_KEY;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, jwtSecretToken);
        next();
    } catch (error) {
        res.status(401).json({ message: "Verification failed." });
    }
};




