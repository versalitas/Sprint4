const express = require('express');
const api = express.Router();

//controllers
const getRanking = require('../controllers/rankings.js');

api.get('/rankings', getRanking);

module.exports = api;