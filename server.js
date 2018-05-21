// ===========================================================================
// DEPENDENCIES
// ===========================================================================
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

// ===========================================================================
// EXPRESS CONFIGURATION
// ===========================================================================
// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;
// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());