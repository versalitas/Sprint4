
require('dotenv').config();
const express = require('express');
const createDB = require('./app/service/createDB.js')

const app = express();


const port = process.env.API_PORT || 3001;

//create DB if not exists
createDB();

// Config
app.use(express.json());

// Middlewares



// Routes




// Starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });