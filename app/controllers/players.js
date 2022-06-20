const Sequelize = require('sequelize');
const {sequelize} = require('../config/dbconfig,js');
const db = require('connectDB.js');


const Player = sequelize.define('Player', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey : true, 
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull : false, 
        unique: true
    },


})