//importing dependencies

const express = require('express');
//converts the body of incoming requests to json
const bodyParser = require('body-parser');
//configures express adding headers stating api accepts request from other origins
const cors = require('cors');
//helps to secure https requests
const helmet = require('helmet');
//adds logging capabilities
const morgan = require('morgan');

//defines the express app

const app = express();

//temp array as database

//setting up middleware

//enhancing security
app.use(helmet());

//parses json bodies to js objects
app.use(bodyParser.json());


// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(ads);
  });

  // starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
  });