const {DataTypes} = require("sequelize");
const Sequelize = require('sequelize');

 
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        //host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        //port: process.env.DB_PORT
      });
    
    
    const Players = sequelize.define('players', {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
        username: {
        type: DataTypes.STRING,
        defaultValue: "anonymous"
        }
       }
    )
  /*  
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
*/

module.exports = {Players, sequelize/*, Scores*/};

/*
POST /games/{id}: player(id) rolls the dice
DELETE /games/{id}: delete all rolls of player
GET /games/{id}: list of all rounds of player (id)
*/