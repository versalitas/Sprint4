'use strict'

require('dotenv').config();
const express = require('express');
//const cors = require('cors');

//initialize server obj
const app = express();


//settings
const port = process.env.PORT || 3001;

//import routes

let api_routes = require('./routes/users.js');
let uploads_routes = require('./routes/uploads.js');


//enabling cors
//app.use(cors);
//add middleware for handling json
app.use(express.json());


app.use('/public', express.static('public'));

//base routes
//level 1

app.use('/api', api_routes);
app.use('/api', uploads_routes);


// starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });









