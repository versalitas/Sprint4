const express = require('express');
const api = express.Router();
const getUser = require('../controllers/users.js');

api.get('/users', getUser);
api.post('/users/images', uploadImage)



 
  
module.exports = api;



  