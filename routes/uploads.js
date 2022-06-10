const express = require('express');
const api = express.Router();
//require middleware and controllers
//const multer  = require('multer')
const {upload, uploadControll} = require('../controllers/uploads.js')





//endpoint to upload file
api.post('/uploads', upload.single('image'), uploadControll);




module.exports = api;