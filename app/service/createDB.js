//https://stackoverflow.com/questions/63473744/is-there-a-way-to-create-the-database-if-it-doesnt-exist-with-sequelize//https://stackoverflow.com/questions/31294562/sequelize-create-database/52915491#52915491
//https://jasonwatmore.com/post/2020/09/17/sequelize-mysql-create-database-if-it-doesnt-exist
//https://stackoverflow.com/questions/31294562/sequelize-create-database/52915491#52915491

const mysql = require('mysql2/promise');
const dbName = process.env.DB_NAME || "GAME";

const createDB = () => { mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "enunlugardelamancha",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Database create or successfully checked");
        process.exit(0);
    })
})
}

module.exports = createDB;












/*

require('dotenv').config();
const mysql = require('mysql2/promise');
//const { Sequelize } = require('sequelize');




const initDB = async() => {
    
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });

    //await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);

    connection.connect(function(err) {  
        if (err) throw err;  
        console.log("Connected!");  
        con.query("CREATE DATABASE javatpoint", function (err, result) {  
        if (err) throw err;  
        console.log("Database created");  
        });  
        }); 





}
    
    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.User = require('../users/user.model')(sequelize);

    // sync all models with database
    await sequelize.sync();
   
}*/


//module.exports = initDB;