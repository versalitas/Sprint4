//https://www.securecoding.com/blog/jwt-expressjs/
//https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');
const secretToken = process.env.TOKEN_SECRET;


module.exports = (req, res, next) => {
    const token = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, app.get(secretToken), (err, decoded) => {      
        if (err) {
          return res.json({ message: 'Access denied. Token not valid' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          message: 'Token not found.' 
      });
    }
 }

   


