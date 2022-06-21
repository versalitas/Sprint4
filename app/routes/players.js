const express = require('express');
const api = express.Router();
//const {addPlayer, modifyName, showPlayer} = require('../controllers/players.js');
const {addPlayer} = require('../controllers/players.js');

//TODO validation logic?


api.post('./players', addPlayer);
/*api.put('./players/:id', modifyName);
api.get('./players/:id', showPlayer);*/


module.exports = api;
