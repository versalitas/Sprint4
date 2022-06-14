'use strict'

//https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html

require('dotenv').config();
const express = require('express');
const path = require('path');


//initialize server obj
const app = express();



//settings
const port = process.env.PORT || 3001;

//import routes
let users_routes = require('./routes/users.js');
let uploads_routes = require('./routes/uploads.js');
let time_routes = require('./routes/time.js');
let poke_routes = require('./routes/pokemons.js');



//add middleware for handling json
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

//base routes
//level 1

app.use('/api', users_routes);
app.use('/api', uploads_routes);

//level 2

app.use('/api', time_routes);

//level 3

app.use('./api', poke_routes);






// starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });









