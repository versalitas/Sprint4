//importing dependencies
//https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c

const express = require('express');

const fs = require('fs');

const currentUrl = 'http://localhost';

//PORT defining as environmental variable
// in terminal $export PORT=3001 or another value 
const port = process.env.PORT || 3000;
//creates an instance of express to serve the end points
const app = express();

//handling routes
const routes = require('./routes/routes.js')(app, fs);


//add middleware for parsing json
app.use(express.json());








  // starting the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });