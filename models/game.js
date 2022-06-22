const {DataTypes} = require('sequelize');
//sequelize object
const sequelize = require('./index.js');

 
const Players = sequelize.define('players', {
    username: {
        type: DataTypes.STRING,
        defaultValue: "anonymous",
        
    }
})
  
    const Scores = sequelize.define('scores', {
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

// one-to-many relationship
Players.hasMany(Scores); 
Scores.belongsTo(Players);

Players.sync()
.then()
.catch(err => console.log(err));

Scores.sync()
.then()
.catch(err => console.log(err));


module.exports = {Players, Scores};














    


Players.hasMany(Scores, {onDelete:'cascade'});
Scores.belongsTo(Players);


module.exports = {Players, sequelize/*, Scores*/};

/*
POST /games/{id}: player(id) rolls the dice
DELETE /games/{id}: delete all rolls of player
GET /games/{id}: list of all rounds of player (id)
*/