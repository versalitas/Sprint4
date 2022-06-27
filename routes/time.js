const express = require('express');
const api = express.Router();
const basicAuth = require('express-basic-auth');

//controllers and middlewares
const getTime = require('../controllers/time.js');
const cors = require('cors');
const noCache = require('../middlewares/noCache.js');

const checkAuth = require('../middlewares/checkAuth.js')

//endpoint to get time
api.post('/time',
    cors(),
    noCache,                         
    checkAuth,
  getTime);

 module.exports = api;

//alternative deployment of middleware, general

/* 
api.use(cors());
api.use(noCache);
api.use(basicAuth({
    users: { 'admin': 'qwerty' },
    unauthorizedResponse: {status:"Error", 
    message:"401 Unauthorized access."}
    }))
*/