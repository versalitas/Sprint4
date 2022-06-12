const express = require('express');
const api = express.Router();

const getTime = require('../controllers/time.js');

//adding middleware
const cors = require('../middlewares/corsMiddleware.js');
const noCache = require('../middlewares/noCache.js');
//const checkAuth = require('../middlewares/checkAuth');


//endpoint to get time
api.post('/api',
     //cors,
    noCache,                         
    //checkAuth
  getTime);





module.exports = api;