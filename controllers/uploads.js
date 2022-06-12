
const uploadControl = (req,res) =>{
  
  try{

    res.status(200).send({
      message: "File successfully uploaded: " + req.file.originalname,
    });

  } catch(err){
    return res.status(500).send({
      status:'Error', 
      message: 'Server armageddon. Sorry...'
  });
}



module.exports = uploadControl;

/*
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
  
  */