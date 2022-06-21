const express = require('express');
const api = express.Router();

const playersRoutes = require('./players.js');
//const gamesRoutes = require('./games.js');
//const scoresRoutes = require('./scores.js');

api.use('./', playersRoutes);
//api.use('./', gamesRoutes);
//api.use('./', scoresRoutes);


module.exports = api;


