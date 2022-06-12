
const getTime = () => {
    try{
    res.send({
        status: "success",
        data:{
            username: req.body.username,
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