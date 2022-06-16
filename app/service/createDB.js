//https://www.npmjs.com/package/mysql2

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




    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

 

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=QWERTY
DB_NAME=sprint4