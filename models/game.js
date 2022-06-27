const {DataTypes} = require('sequelize');
//sequelize object
const sequelize = require('./index.js');

const Players = sequelize.define('players', {
    username: {
        type: DataTypes.STRING,
        defaultValue: "anonymous"
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
            allowNull: false,
            defaultValue: "0",
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

