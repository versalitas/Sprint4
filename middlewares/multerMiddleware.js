//https://blog.logrocket.com/multer-nodejs-express-upload-file/
//https://laratutorials.com/node-js-express-rest-api-image-upload-example/
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//https://dev.to/thesameeric/how-to-validate-uploaded-files-in-node-js-2dc4

const { path } = require('express/lib/application');
const res = require('express/lib/response');
const multer = require('multer');
const maxSize = 3145728;

const dir = '../public';

//define disk storage
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir);
  },
  fileName: (req, file, cb) => {
   cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

//filterfunction
const fileFilter = (req, file, cb) => {
    
    const validMimes = [
            "image/jpg", 
            "image/png", 
            "image/gif",
          ];
    
    if(validMimes.includes(file.mimetype)) return cb(null, true);
    

    return cb(new Error('415'), false);
};


//https://stackoverflow.com/questions/30838901/error-handling-when-uploading-file-using-multer-with-expressjs
//define multer middleware storage, limits, filter criteria
let upload = (req, res, next) => { return multer({
  storage: storage,
  limits: {fileSize : maxSize},
  filefilter: fileFilter,
}).single('image')(req, res, function(err){

 // error handlers
    // file size error
    
    if (err instanceof multer.MulterError) return res.status(413).send({ status: 'fail', message: 'Entity too large'});

    // Invalid file extension, message returned from fileFilter callback
    if (err.message == '415') return res.status(415).send({ status: 'fail', message: 'Unsupported Media Type'});

    // file not selected
    if (!req.file) return res.status(400).send({ status: 'fail', message: 'File not found'}); 

    // SUCCESS
    next();
  });
}



module.exports = upload;

