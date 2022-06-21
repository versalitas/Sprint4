const {DataTypes} = require("sequelize");
const sequelize = require('./index.js');
 
    
    
    const Players = sequelize.define('players', {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        username: {
        type: DataTypes.STRING,
        defaultValue: "ANONYMOUS"
        }
       }
    )
    
    const Scores = sequelize.define('scores', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            },
        dice1: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        dice2: {
            type: DataTypes.SMALLINT,
            allowNull: false
        },
        win: {
            type: DataTypes.SMALLINT,
            allowNull: false
        }
    })














    


Players.hasMany(Scores, {onDelete:'cascade'});
Scores.belongsTo(Players);

module.exports = {Players, Scores};

/*
POST /games/{id}: player(id) rolls the dice
DELETE /games/{id}: delete all rolls of player
GET /games/{id}: list of all rounds of player (id)
*/