'use strict'

//https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html

require('dotenv').config();
const express = require('express');


//initialize server obj
const app = express();


//settings
const port = process.env.PORT || 3001;

//import routes

let api_routes = require('./routes/users.js');
let uploads_routes = require('./routes/uploads.js');
let time_routes = require('./routes/time.js');



//add middleware for handling json
app.use(express.json());
app.use('/public', express.static('public'));

//base routes
//level 1

app.use('/api', api_routes);
app.use('/api', uploads_routes);

//level 2

app.use('/api', time_routes);






// starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });









