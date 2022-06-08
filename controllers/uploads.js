//https://blog.logrocket.com/multer-nodejs-express-upload-file/
//https://laratutorials.com/node-js-express-rest-api-image-upload-example/
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//https://dev.to/thesameeric/how-to-validate-uploaded-files-in-node-js-2dc4

const path = require('path');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

//define disk storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(_dirname,'../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname);
  }
});

//should this be required as a helper function?
const validateExt = (filename) =>
{ const okExts = ['img','jpg','jpeg', 'png', 'svg', 'gif',];
  const i = filename.lastIndexOf('.');
  const ext = filename.substr(i);
  return (i > -1 && okExts.includes(ext))? true: false;
}


const uploadImage = (res, req) => {
try {  
    
    //checks if 400 – Bad request
    if (!req.files) return res.status(400).send({ status: "fail", message: "File not found"}); 
    
    let isExtOk = validateExt(req.files);
    if(isExtOk){
      res.status(200).send({status:"success", message:"File has successfully been uploaded"});

    } else {
      return res.status(415).send({ status: "fail", message: "Unsupported Media Type"}); 
    }
  
  
  } catch (err) {
    res.status(500).send({
        status:"error", 
        message: "pertinent error message"
    })
  }
}     



 




module.exports = uploadImage;