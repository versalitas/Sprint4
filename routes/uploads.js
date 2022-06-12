const express = require('express');
const api = express.Router();
//require middleware and controllers
//const multer  = require('multer')
const {upload, uploadControl} = require('../controllers/uploads.js')





//endpoint to upload file
api.post('/uploads', upload.single('image'), uploadControl);




module.exports = api;