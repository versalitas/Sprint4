//https://stackoverflow.com/questions/63473744/is-there-a-way-to-create-the-database-if-it-doesnt-exist-with-sequelize//https://stackoverflow.com/questions/31294562/sequelize-create-database/52915491#52915491
//https://jasonwatmore.com/post/2020/09/17/sequelize-mysql-create-database-if-it-doesnt-exist
//https://stackoverflow.com/questions/31294562/sequelize-create-database/52915491#52915491

const mysql = require('mysql2/promise');
const dbName = process.env.DB_NAME /*|| "GAME"*/;

const createDB = async() => { 
    
    const connection = await mysql.createConnection({
    host: process.env.DB_HOST /*|| "127.0.0.1"*/,
    port: process.env.DB_PORT /*|| "3306"*/,
    user: process.env.DB_USER /*|| "root"*/,
    password : process.env.DB_PASSWORD /*|| "enunlugardelamancha"*/});
    
    await connection.connect();
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);
    console.info("Database created or successfully checked");
    await connection.end();
};


module.exports = createDB;












/*

require('dotenv').config();
const mysql = require('mysql2/promise');
//const { Sequelize } = require('sequelize');









}
    
    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.User = require('../users/user.model')(sequelize);

    // sync all models with database
    await sequelize.sync();
   
}*/


//module.exports = initDB;