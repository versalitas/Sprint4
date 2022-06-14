const upload = require('../middlewares/multerMiddleware.js')






const uploadImage = (req,res) => { upload(req, res, function(err){
    
    if (req.file == 'undefined' || !req.file ) {return res.status(400).send({status: 'fail', message: 'Oops! File not found'});
            
      // Invalid file extension
    } else if (err){return res.status(415).send({status: 'fail', message: err.message});
            
    } else { return  res.status(200).send({
        message: "File uploaded successfully!",
        file: req.file});
    }
  })
}

/*
const uploadControl = (req,res) =>{
  
  try{
    // error handlers
         
         // file not selected
         if (req.file == 'undefined') return res.status(400).send({status: 'fail', message: 'Oops! File not found'});
        
         // file size error
         if (err instanceof multer.MulterError) return res.status(413).send({status: 'fail', message: 'Entity too large'});
     
         // Invalid file extension, message returned from fileFilter callback
         if (req.fileValidationError) return res.status(415).send({status: 'fail', message: 'Unsupported Media Type'});
         
         //if succesful
         return res.status(200).send({status:"Success", message: "File successfully uploaded"});
    

    } catch(err){
    return res.status(500).send({
      status:"Error", 
      message: "Server armageddon. Sorry..."
    });
  }
}

*/

module.exports = uploadImage;

