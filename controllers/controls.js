const express = require("express");
const Route = express.Route();
const path = require ("path");

const request = require("request");
const cheerio = require("cheero");

const comments = require("../models/notelog.js");
const comics = require("../models/comicreviews.js");

route.get("/", function(req,res){
    res.redirect("/comicreviews")
});