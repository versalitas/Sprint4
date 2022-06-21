require('dotenv').config();
const express = require('express');
const createDB = require('./service/createDB.js');

//requiering routes
const allRoutes = require('./routes/players.js');


const app = express();


const port = process.env.API_PORT || 3001;

//create DB if not exists
//if(process.env.DB_DIALECT === 'mysql'){
createDB();
//} else {
// createMongoDB();
//}


// Config
app.use(express.json());

// Middlewares


// Routes
app.use('/players', allRoutes);

// Starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });