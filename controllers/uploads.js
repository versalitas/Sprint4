
const res = require('express/lib/response');
const multer = require('multer');
const path = require('path');

const checkFile = require('../middlewares/fileFilter.js')
const maxSize = 31457280;

const dir = './public';

//controller

//define disk storage
let storage = multer.diskStorage({
  destination: dir,
  fileName: (req, file, cb) => {
  cb(null, file.fieldname + '-' + Date.now());
  }
});


// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: maxSize},
  fileFilter: function(req, file, cb){
    checkFile(file, cb);
  }
}).single('image');

//controller
const uploadImage = (req,res) => { 
  
  try{
   
    upload(req, res,(err) => {
    // Invalid file extension
   if (err) {return res.status(415).send({status: 'fail', message: err.message});

    } else if(!req.file ){return res.status(400).send({status: 'fail', message: 'Oops! File not found'});
            
    } else { return res.status(200).send({
        message: "File uploaded successfully!",
        file: req.file});
    }
    })
  } catch (err) {
  res.status(500).send({
      status: 'error',
      message: err.message
  })
 }
}

module.exports = uploadImage;










