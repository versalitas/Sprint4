//https://blog.logrocket.com/multer-nodejs-express-upload-file/
//https://laratutorials.com/node-js-express-rest-api-image-upload-example/

//http://localhost:3001/api/images


const uploadImage = (res, req) => {
try {  
    //checks if 400 – Bad request
    if (!req.files) return res.status(400).send({ status: "fail", message: "File not found"}); 
    //check extensions let ext = ['img','jpg','jpeg', 'png', 'svg', 'gif]
    //



      } catch (err) {
        res.status(500).send({
            status:"error", 
            message: "pertinent error message"
        })
      }


}


module.exports = uploadImage;