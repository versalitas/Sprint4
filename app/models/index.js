require('dotenv').config();
const Sequelize = require('sequelize');

// Export connection to database
module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
  });








//https://www.npmjs.com/package/mysql2
const configdb = require('../config/configdb.js');
//get the client
const mysql = require('mysql2');

//create the db
const createDB = async () =>{
    
    const connection = mysql.createConnection({ host:configDB.host, user:configDB.user, password:configDB.password });
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${configDB.database}\`;`, (err, result) =>{
        if(err) throw err
        sequelize.sync()
        .then(()=>console.log('MySQLDB connected'))
        .catch(err=>console.log(err))
    })
    connection.end();
}


DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_NAME=game
DB_PASS=enunlugardelamancha




 
 