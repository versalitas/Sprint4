
const express = require('express');
const api = express.Router();
const {playGame, getScores} = require('../controllers/games.js')



api.post('/games/:id', playGame);
api.get('/games/:id', getScores);

/*
DELETE /games/{id}: delete all rolls of player
GET /games/{id}: list of all rounds of player (id)
*/

module.exports = api;