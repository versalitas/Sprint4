const express = require('express');
const api = express.Router();

//const {addPlayer, modifyName, showPlayer} = require('../controllers/players.js');
const {addPlayer, updatePlayer, getPlayers} = require('../controllers/players.js');


//endpoints

api.post('/players', addPlayer);
api.put('/players/:id', updatePlayer);
api.get('/players', getPlayers);



module.exports = api;
