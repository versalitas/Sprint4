//importing dependencies

const express = require('express');

/*
//converts the body of incoming requests to json
const bodyParser = require('body-parser');
//configures express adding headers stating api accepts request from other origins
const cors = require('cors');
//helps to secure https requests
const helmet = require('helmet');
//adds logging capabilities
const morgan = require('morgan');
*/
//defines the express app

const app = express();


// defining an endpoint returning my name
app.get('/', (req, res) => {
    res.send('MK Gonzalez');
  });
/*
//setting up middleware

//enhancing security
app.use(helmet());

//parses json bodies to js objects
app.use(bodyParser.json());


// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

*/ 

//PORT defining as environmental variable
// in terminal $export PORT=3001 or another value 
const port = process.env.PORT || 3000;
  // starting the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });