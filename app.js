//console.log(require('crypto').randomBytes(64).toString('hex'));

require('dotenv').config();
const express = require('express');


const initDB = require('./utils/connectmysqlDB.js');

//requiering routes
const login = require('./routes/login.js');

const playersRoutes = require('./routes/players.js');
const gamesRoutes = require('./routes/games.js');
const rankingsRoutes = require('./routes/rankings.js');
const {validate, verifyToken} = require('./middlewares/jwt_middleware.js');
const app = express();

const port = process.env.API_PORT || 3001;

initDB();

// Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.all('/', validate, verifyToken);

app.use('/api', login);

// Middlewares


app.use('/api', playersRoutes);
app.use('/api', gamesRoutes);
app.use('/api', rankingsRoutes);


//invalid route handling
app.use((req, res, next)=>{
  res.status(404).send({message:"Bad request: Route Not Found"});
});


// Starting the server
const server = app.listen(port, () => {
    console.log('Listening on port', server.address().port);
  });