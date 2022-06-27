const basicAuth = require('express-basic-auth')

module.exports = basicAuth({
    users: { 'admin': 'qwerty' },
    unauthorizedResponse: {status:"Error", 
    message:"401 Unauthorized access."}
    })


 