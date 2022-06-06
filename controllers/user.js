
//http://localhost:3001/api/user

const getUser = (req, res) => {
    try{
        res.status(200).json({
                "name": "Marie-Klara",
                "edad": "47",
                "url": req.protocol + "://" + req.get('Host') + req.originalUrl
               })
    } catch {
        res.status(404).send({
            status:"error", 
            message: "This page doesn't exist"
        })
    }
}

const 


module.exports = {getUser, uploadImage};