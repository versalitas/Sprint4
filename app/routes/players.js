const express = require('express');
const api = express.Router();
const {createPlayer, modifyName, showPlayer} = require('../controllers/players.js');

//TODO validation logic?


api.post('./players/:id', createPlayer);
api.put('./players/:id', modifyName);
api.get('./players/:id', showPlayer);


module.exports = api;
