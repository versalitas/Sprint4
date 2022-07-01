//https://asfo.medium.com/autenticando-un-api-rest-con-nodejs-y-jwt-json-web-tokens-5f3674aba50e

const jwt = require('jsonwebtoken');


module.exports = async (req, res) => {
    
    try {
    const {username, password} = req.body;
    const { ADMIN_NAME, ADMIN_PASSWORD, TOKEN_SECRET_KEY } = process.env;
 
    if (username !== ADMIN_NAME || password !== ADMIN_PASSWORD ) {
        res.status(401).json({status:'fail',
            message: 'Incorrect username or password'
        });
        return;
    }

    // generates token
     const payload = {
      username:ADMIN_NAME
      };

      const accessToken = jwt.sign(payload, TOKEN_SECRET_KEY, {
      expiresIn: 1440
      });
      
      res.json(accessToken);
    } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
}













    
  
        
        
      
     
   
