
const uploadControl = (req,res) =>{
  
  try{
      return res.status(200).send({
      status:"Success",
      message: "File successfully uploaded: "
    });

  } catch(err){
    return res.status(500).send({
      status:"Error", 
      message: "Server armageddon. Sorry..."
    });
  }
}



module.exports = uploadControl;

