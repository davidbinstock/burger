// ===========================================================================
// DEPENDENCIES
// ===========================================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js")
// ===========================================================================
// EXPRESS CONFIGURATION
// ===========================================================================
// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;
// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Static content
app.use(express.static("public"));
// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Use routes
app.use(routes);

// ===========================================================================
// Listen
// ===========================================================================
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});