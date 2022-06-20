require('dotenv').config();
const express = require('express');
const createDB = require('./app/service/createDB.js');

//requiering routes
const allRoutes = require('./app/routes/allRoutes.js');


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
app.use('./api', allRoutes);

// Starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });