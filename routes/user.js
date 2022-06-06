const express = require('express');
const api = express.Router();
const getUser = require('../controllers/user.js');

api.get('/user', getUser);
//api.post (image)



 
  
module.exports = api;



  