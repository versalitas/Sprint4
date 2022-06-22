const express = require('express');
const api = express.Router();

//const {addPlayer, modifyName, showPlayer} = require('../controllers/players.js');
const addPlayer = require('../controllers/players.js');




api.post('/players', addPlayer);



module.exports = api;
