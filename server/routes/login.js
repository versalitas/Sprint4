const express = require('express');
const api = express.Router();

const {authentication} = require('../middlewares/authentication.js');
const login = require('../controller/login.js');

api.post( '/',
             authentication,
             login);

module.exports = api;