const express = require('express');
const { append } = require('express/lib/response');
const api = express.Router();

const authController = require('../controllers/auth.js');




api.post('/login', authController);





module.exports = api;