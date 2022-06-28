const express = require('express');
const api = express.Router();

//controllers
const {getRanking, getWinner, getLoser} = require('../controllers/rankings.js');

api.get('/rankings', getRanking);
api.get('/rankings/loser', getLoser);
api.get('/rankings/winner', getWinner);

module.exports = api;