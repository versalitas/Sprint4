//https://blog.logrocket.com/multer-nodejs-express-upload-file/
//https://laratutorials.com/node-js-express-rest-api-image-upload-example/
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//https://dev.to/thesameeric/how-to-validate-uploaded-files-in-node-js-2dc4

const { path } = require('express/lib/application');
const multer  = require('multer')

const dir = './uploads';

//define disk storage
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir);
  },
  fileName: (req, file, cb) => {
   cb(null, file.originalname );
  }
});


//define multer middleware storage, limits, filter criteria
let upload = multer({
  storage: storage,
  limits: {fileSize : 1048576
  },
  filefilter: (req, file, cb) => {
    const validExt = ['jpg', 'png', 'gif',];
      if (validExt.includes(file.mimetype)) {
       cb(null,true); 
     } else {
      cb(new Error(415));
    }
  }
})

//controller function
uploadControl = (req, res) => {
try {  
    //checks if 400 – Bad request
    if (req.file == 'undefined'){
      return res.status(400).send({ status: 'fail', message: 'File not found'}); 
    } else {
      return res.status(200).send({status:'success', name: file.originalname, message:'File has successfully been uploaded'});
    }   
  } catch (err) {
    //returns major error message
    if(err === 415){
      return res.status(415).send({ status: 'fail', message: 'Unsupported Media Type'});
    } else if (err.code == "LIMIT_FILE_SIZE"){
      return res.status(413).send({ status: 'fail', message: 'Entity too large'});
    } else {
        return res.status(500).send({
        status:'error', 
        message: 'Server armageddon. Sorry...'
    });
    }
  }
}     





module.exports = {upload, uploadControl};