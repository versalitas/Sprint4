const express = require('express');
const api = express.Router();
const uploadImage = require('../controllers/uploads.js');


api.post('/uploads', upload.single(img), uploadImage);