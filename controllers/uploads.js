//https://blog.logrocket.com/multer-nodejs-express-upload-file/
//https://laratutorials.com/node-js-express-rest-api-image-upload-example/
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status



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

    } else {
      return res.status(415).send({ status: "fail", message: "Unsupported Media Type"}); 
    }
    );
  }
    
    



      } catch (err) {
        res.status(500).send({
            status:"error", 
            message: "pertinent error message"
        })
      }






module.exports = uploadImage;