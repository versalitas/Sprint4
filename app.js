//console.log(require('crypto').randomBytes(64).toString('hex'));

require('dotenv').config();
const express = require('express');

//connecting to DB
const initDB = require('./utils/connectmysqlDB.js');

//requireing routes
const login = require('./routes/login.js');
const playersRoutes = require('./routes/players.js');
const gamesRoutes = require('./routes/games.js');
const rankingsRoutes = require('./routes/rankings.js');


const app = express();

const port = process.env.API_PORT || 3001;

// requireing middleware
const checkToken = require('./middlewares/checkToken.js');

//starting DB
initDB();

// Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', login);
app.use('/api', checkToken, playersRoutes);
app.use('/api', checkToken, gamesRoutes);
app.use('/api', checkToken, rankingsRoutes);


//invalid route handling
app.use((req, res, next)=>{
  res.status(404).send({message:"Bad request: Route Not Found"});
});


// Starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });