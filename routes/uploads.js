const express = require('express');
const api = express.Router();
//require middleware
const multer  = require('multer')
const upload = multer({ dest: './uploads/' })

//require controllers
const uploadImage = require('../controllers/uploads.js');


//endpoint to upload file
api.post('/uploads', upload.single('file'), uploadImage);




module.exports = api;