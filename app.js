const express= require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3001;

// Config
app.use(express.json());


// Routes


// Middlewares


// Starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });