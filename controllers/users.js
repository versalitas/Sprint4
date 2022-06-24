//http://localhost:3000/api/users

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

module.exports = getUser;