const express = require('express');
const api = express.Router();

const login = require('../controllers/login.js');



api.post('/login', login);




module.exports = api;