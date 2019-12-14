const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//scraper packages
const cheerio = require("cheerio");
const axios = require("axios");
const exphbs  = require('express-handlebars');

require("dotenv/config");


//running express and handlebars
const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//log info with morgan package
app.use(logger("dev"));
//parser code for json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static folder
app.use(express.static("public"));



//connection to database
mongoose.connect(process.env.Comic_Connection, {useNewUrlParser: true });

//connection to server with my own unique number
app.listen(3030);
