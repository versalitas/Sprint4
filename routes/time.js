const express = require('express');
const api = express.Router();

const getTime = require('../controllers/time.js');
const cors = require('cors');
const noCache = require('../middlewares/noCache.js');

//adding middleware
//require or api.use ?








//endpoint to get time
api.post('/time',
    cors(),
    noCache,                         
    //checkAuth,
  getTime);




module.exports = api;