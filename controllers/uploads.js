//https://blog.logrocket.com/multer-nodejs-express-upload-file/
//https://laratutorials.com/node-js-express-rest-api-image-upload-example/
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//https://dev.to/thesameeric/how-to-validate-uploaded-files-in-node-js-2dc4



//should this be required as a helper function?
const validateExt = (fileName) =>
{ const okExts = ['img','jpg','jpeg', 'png', 'svg', 'gif',];
  const i = fileName.lastIndexOf('.');
  const ext = fileName.substr(i);
  return (i > -1 && okExts.includes(ext))? true: false;
}


const uploadImage = (res, req) => {
try {  
    
    //checks if 400 – Bad request
    if (!req.files) return res.status(400).send({ status: "fail", message: "File not found"}); 
    
    let isExtOk = validateExt(req.files);
    //checks if file is an image
    if(isExtOk){
      res.status(200).send({status:"success", message:"File has successfully been uploaded"});

    } else {
     //returns error
      return res.status(415).send({ status: "fail", message: "Unsupported Media Type"}); 
    }
  
  
  } catch (err) {
    //returns major error message
    res.status(500).send({
        status:"error", 
        message: "Server doom. Please try later."
    })
  }
}     



 




module.exports = uploadImage;