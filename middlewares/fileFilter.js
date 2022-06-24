//https://blog.logrocket.com/multer-nodejs-express-upload-file/
//https://laratutorials.com/node-js-express-rest-api-image-upload-example/
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//https://dev.to/thesameeric/how-to-validate-uploaded-files-in-node-js-2dc4


//checkFile function
module.exports = (file, cb) => {

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