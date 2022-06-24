const express = require('express');
const api = express.Router();

//require middleware and controllers
const uploadImage = require('../controllers/uploads.js')

//endpoint to upload file
api.post('/uploads', uploadImage);


module.exports = api;