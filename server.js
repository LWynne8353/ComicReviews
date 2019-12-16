const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
//scraper packages
const exphbs  = require('express-handlebars');

require("dotenv/config");


//running 
const app = express();
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');
//log info with morgan package
app.use(logger("dev"));
//parser code for json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//static folder
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.sendFile(path.join("\public\style.css"))
    //res.json("Working?");

});

app.get("/appjs",(req, res)=>{
    res.json("testing");
});




//connection to database
mongoose.connect(process.env.Comic_Connection, {useUnifiedTopology: true, useNewUrlParser: true });
console.log("connected to Mongoose atlas data")

//connection to server with my own unique number
const port = process.env.PORT || 3030
app.listen(port, function(){
 console.log("listening on Port" + port);
});
