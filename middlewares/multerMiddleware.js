//https://blog.logrocket.com/multer-nodejs-express-upload-file/
//https://laratutorials.com/node-js-express-rest-api-image-upload-example/
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//https://dev.to/thesameeric/how-to-validate-uploaded-files-in-node-js-2dc4


const res = require('express/lib/response');
const multer = require('multer');

const maxSize = 31457280;

const dir = './public';

//define disk storage
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir);
  },
  fileName: (req, file, cb) => {
   cb(null, file.fieldname + '-' + Date.now());
  }
});

//filterfunction
const fileFilter = (req, file, cb) => {

    const validMimes = [
            "image/jpg", 
            "image/jpeg",
            "image/png", 
            "image/gif",
          ];
    
    if(validMimes.includes(file.mimetype)){return cb(null, true);
    } else {
    
    return cb(new Error('Unsupported Media Type'), false);
   }
};



/*
const upload = (req, res, next) => {return multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: fileFilter,
}).single("file")(req, res, function (err) {

  // Error handlers
  // FILE SIZE LIMIT ERROR
  if (err instanceof multer.MulterError) return res.status(413).send({status: 'fail', message: 'Entity too large'});

  // INVALID FILE TYPE
  if (req.fileValidationErrorr) return res.status(415).send({status: 'fail', message: 'Unsupported Media Type'});

  // FILE NOT SELECTED
  if (!req.file) return res.status(400).send({status: 'fail', message: 'Oops! Upload a file!'});

  // SUCCESS
  next();
});
}

*/









//https://stackoverflow.com/questions/30838901/error-handling-when-uploading-file-using-multer-with-expressjs
//define multer middleware storage, limits, filter criteria
let upload = multer({
  storage: storage,
  limits: {fileSize : maxSize},
  filefilter: fileFilter,
}).single('image');


module.exports = upload;

