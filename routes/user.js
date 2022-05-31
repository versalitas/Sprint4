'use strict'

let express = require("express");
let UserController = require("../controller/user");

let api = express.Router();
let multipart = require("connect-multiparty");

//configure body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//base routes

app.get("/get", (req, res) => {
//return JSON
	res.send
})