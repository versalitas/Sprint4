const express = require('express');
const api = express.Router();

//controllers
const {playGame, getScores, deleteScores} = require('../controllers/games.js')

//routes
api.post('/games/:id', playGame);
api.get('/games/:id', getScores);
api.delete('/games/:id', deleteScores);

module.exports = api;