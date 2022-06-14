const basicAuth = require('express-basic-auth')

const checkAuth = basicAuth({
    users: { 'admin': 'qwerty' },
    unauthorizedResponse: {status:"Error", 
    message:"401 Unauthorized access."}
    })


module.exports = checkAuth;