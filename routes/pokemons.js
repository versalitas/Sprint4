const express = require('express');
const api = express.Router();

const getPokemon = require('../controllers/pokemons.js');



api.get('/pokemon', getPokemon);



module.exports = api;