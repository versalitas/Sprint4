const express = require('express');
const api = express.Router();

const getPokemon = require('../controllers/pokemons.js');



api.get('/pokemons/:id', getPokemon);



module.exports = api;