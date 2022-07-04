//https://www.securecoding.com/blog/jwt-expressjs/
//https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const verifyToken = (req, res, next) => {

    const token = req.header('jwt-token');

    if(!token){
        res.status(401).json({status:'fail',
            message: "Access denied, missing token."
        });
        return;
    }

    try {
        
        const payload = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
       
        next();  

    } catch (error) {
       
        res.status(401).json({status:'fail',
            messagw: 'Invalid token.'
        });
        return;
    }

}

//https://express-validator.github.io/docs/validation-result-api.html
const validate = ( req, res, next ) => {
    const error = validationResult(req);
    if ( !error.isEmpty()) {
        return res.status(400).send({
            status: 'fail',
            error
        })
    }
    next();

}







module.exports = {verifyToken,validate}
