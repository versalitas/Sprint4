
//http://localhost:3001/api/users

const getUser = (req, res) => {
    try{
        res.status(200).json({
                "name": "Marie-Klara",
                "age": "47",
                "url": req.protocol + "://" + req.get('Host') + req.originalUrl
               })
    } catch (err) {
        res.status(404).send({
            status:"error", 
            message: "This page doesn't exist"
        })
    }
}


//http://localhost:3001/api/users/images

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
    


module.exports = {getUser};