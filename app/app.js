
require('dotenv').config();
const express= require('express');
const cors = require('cors');
const app = express();


const port = process.env.API_PORT || 3001;

// Config
app.use(express.json());

// Middlewares
app.use(cors());


// Routes




// Starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });