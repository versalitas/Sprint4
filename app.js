'use strict'

const express = require("express");
require('dotenv').config();
//const cors = require('cors');


//initialize
const app = express();
//const fs = require('fs');

//settings
const port = process.env.PORT || 3001;







//import routes
let api_routes = require('./routes/users.js');
let uploads_routes = require('./routes/uploads.js');

//enabling cors
app.use(cors);
//add middleware for handling json
app.use(express.json());
//app.use(express.static(path.join(__dirname, './data')));
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname, 'public'));






//base route

app.use('/api', api_routes);
app.use('/api/images', upload_routes);


// starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });









