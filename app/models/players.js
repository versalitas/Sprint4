const Sequelize = require('sequelize');
const sequelize = require('/index.js');

    const Player = sequelize.define('player', {
        id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        playername: {
        type: Sequelize.STRING
        }
       },
       {
        timestamps: true,
        updatedAt: false,
        createdAt: 'data'
        }
    )

    module.exports = Player;