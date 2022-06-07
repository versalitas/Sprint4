const express = require('express');
const api = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const uploadImage = require('../controllers/uploads.js');



const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, '/data');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname);
    }
  });


api.post('/uploads', upload.single(img), uploadImage);




module.exports = api;