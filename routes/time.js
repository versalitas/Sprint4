const express = require('express');
const api = express.Router();
const getTime = require('../controllers/time.js');

const cors = require('../middlewares/cors');

const noCache = require('../middlewares/noCache');

const checkAuth = require('../middlewares/checkAuth');



//endpoint to get time
api.post('/api',
    cors,
    noCache,                         
    checkAuth
  ,getTime);





module.exports = api;