//https://asfo.medium.com/autenticando-un-api-rest-con-nodejs-y-jwt-json-web-tokens-5f3674aba50e
const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt');
const secretToken = process.env.TOKEN_SECRET;
const username = process.env.ADMIN_NAME;
const password = process.env.ADMIN_PASSWORD;

module.exports = async (req, res, next) => {
    
    if (req.body.username === username
      && req.body.password === password)
      //await bcrypt.compare(req.body.password, password, function(err, result))){}
      {
      const payload = {
       check:  true
      };
      const token = jwt.sign(payload, app.get(secretToken), {
       expiresIn: 1440
      });
      res.json({
       mensaje: 'Authorization succesful.',
       token: token
      });
        } else {
            res.json({ mensaje: "Username or password are invalid."})
        }
    
   }