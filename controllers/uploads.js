//https://blog.logrocket.com/multer-nodejs-express-upload-file/
//https://laratutorials.com/node-js-express-rest-api-image-upload-example/
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//https://dev.to/thesameeric/how-to-validate-uploaded-files-in-node-js-2dc4

const { path } = require('express/lib/application');
const multer  = require('multer')


const dir = './uploads';

//define disk storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, dir);
  },
  fileName: function (req, file, cb) {
    const { originalname } = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);
  }
});

//define multer middleware storage, limits, filter criteria
const upload = multer({
  storage :storage,
  limits:{filesize : 1048576
  },
  filefilter: (req, file, cb) => {
   const validExt = ['jpg', 'png', 'gif',];
      if (!(validExt.includes(path.extname(file.originalname)))) {
        return res.status(415).send({ status: 'fail', message: 'Unsupported Media Type'});
      }
       
    const fileSize = parseInt(req.headers['content-length']);
      if (fileSize > 1048576) {
      return res.status(413).send({ status: 'fail', message: 'Entity too large'});
    }

    cb(null,true);
   }
})



uploadControll = (req, res) => {
try {  
    //checks if 400 – Bad request
    if (req.file == 'undefined'){
      return res.status(400).send({ status: 'fail', message: 'File not found'}); 
    } else {

      res.status(200).send({status:'success', name: file.originalname, message:'File has successfully been uploaded'});
    }
  } catch (err) {
    //returns major error message
    res.status(500).send({
        status:'error', 
        message: 'Server armageddon. Sorry...'
    })
  }
}     





module.exports = {upload, uploadControll};