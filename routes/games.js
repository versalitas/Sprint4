
const express = require('express');
const api = express.Router();



api.post('/games/:id', playGame);
/*
DELETE /games/{id}: delete all rolls of player
GET /games/{id}: list of all rounds of player (id)
*/

module.exports = api;