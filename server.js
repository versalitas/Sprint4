
//https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9
//https://www.edureka.co/blog/rest-api-with-node-js/
//https://expressjs.com/en/api.html
//https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
//https://stackoverflow.com/questions/59608660/rest-api-best-practise-for-routes


//importing dependencies

const express = require('express');

//creates an instance of express to serve the end points
const app = express();

//const cors = require('cors');

const fs = require('fs');

//PORT defining as environmental variable
// in terminal $export PORT=3001 or another value 
const port = process.env.PORT || 3001;


//handling routes
const routes = require('./routes/routes.js')(app, fs);

//add middleware for handling json
app.use(express.json());
//app.use(express.static(path.join(__dirname, './data')));
//app.use(express.urlencoded({extended: false}));



// starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });