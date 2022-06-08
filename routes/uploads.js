const express = require('express');
const api = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const uploadImage = require('../controllers/uploads.js');


const path = require('path');


//define disk storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads');
  },
  fileName: function (req, file, cb) {
    cb(null, file.fieldname);
  }
});


api.post('/uploads', upload.single('file'), uploadImage);




module.exports = api;