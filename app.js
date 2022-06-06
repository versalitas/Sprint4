'use strict'

var express = require("express");

//initialize
const app = express();
//const fs = require('fs');

//settings
const port = process.env.PORT || 3001;

//import routes
let api_routes = require('./routes/user.js');

//add middleware for handling json
app.use(express.json());
//app.use(express.static(path.join(__dirname, './data')));
app.use(express.urlencoded({extended: false}));


//base route

app.use('/api', api_routes);


// starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });









