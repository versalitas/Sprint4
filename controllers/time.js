
const getTime = (req,res) => {
    try{
    res.send({
        status: "200",
        message: "success",
        data:{
            //username: req.body.username,
            date: new Date()
        }
    });
    } catch (err) {
    res.status(500).send({
        status: "error",
        message: err.message
    });
  } 
}


module.exports = getTime;