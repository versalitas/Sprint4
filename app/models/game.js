const Sequelize = require('sequelize');
const Player = require('./player');
const sequelize = require('/index.js');

const Game = sequelize.define('game', {
    id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
    },
    references: {
        model: Player,
        key: playername
    },
    diceRoll:{

    }

    }
})





module.exports = Game;


POST /games/{id}: player(id) rolls the dice
DELETE /games/{id}: delete all rolls of player
GET /games/{id}: list of all rounds of player (id)