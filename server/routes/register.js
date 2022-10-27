const express = require('express');
const api = express.Router();

const register = require('../controllers/register.js.js.js');

api.post( '/',
             register);

module.exports = api;
