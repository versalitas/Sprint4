'use strict'

var express = require("express");
var bodyParser = require("body-parser");

let app = express();
let user_routes = require("../routes/user");

//middlewares or procedures to execute 
//before receiving the petition 

//configure headers

//base route

app.use("/api, user_routes");

module.exports = app;