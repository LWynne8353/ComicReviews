const express = require("express");


//tools to scrape (hope this works or I will look like a total ajaxs)
const axios = require("axios");
const cheerio = require("cheero");

//requiring the both note log and comic comicreview js
const comments = require("../models/notelog.js");
const comics = require("../models/comicreviews.js");

