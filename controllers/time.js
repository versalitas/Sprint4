
const getTime = (req,res) => {
    try {
    res.status(200).send({
         date: new Date().toLocaleString()
        })
    } catch (err) {
    res.status(500).send({
        status: "error",
        message: "Server doom!"
    });
  } 
}

module.exports = getTime;