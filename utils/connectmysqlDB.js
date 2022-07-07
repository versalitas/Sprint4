//https://stackoverflow.com/questions/63473744/is-there-a-way-to-create-the-database-if-it-doesnt-exist-with-sequelize//https://stackoverflow.com/questions/31294562/sequelize-create-database/52915491#52915491
//https://jasonwatmore.com/post/2020/09/17/sequelize-mysql-create-database-if-it-doesnt-exist
//https://stackoverflow.com/questions/31294562/sequelize-create-database/52915491#52915491

const mysql = require('mysql2/promise');
const {Sequelize} = require('sequelize');
const dbName = process.env.DB_NAME /*|| "GAME"*/;

const initDB = async() => { 
    try {
    const connection = await mysql.createConnection({
    host: process.env.DB_HOST /*|| "127.0.0.1"*/,
    port: process.env.DB_PORT /*|| "3306"*/,
    user: process.env.DB_USER /*|| "root"*/,
    password: process.env.DB_PASSWORD /*|| "enunlugardelamancha"*/});
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);
    await sequelize.sync({ force: false });
    console.info("Database created or successfully checked");
    } catch(error){
        console.error('Connection failed', error);
    }

};

module.exports = initDB;





