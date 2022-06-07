const express = require('express');
const api = express.Router();
const getUser = require('../controllers/users.js');


api.get('/users', getUser);
//validad aqui?
//api.post('/images', uploadImage)



 
  
module.exports = api;



  