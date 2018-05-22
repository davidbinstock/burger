var express = require("express")
var router = express.Router();

// Import the "burger" model (burger.js)
var burger = require("../models/burger.js")

// Routes
router.get("/", function(request, response){
    // call burger.all to get all burger data
    // render view through handlebars
})

router.post("/", function(request, response){
    // call burger.insert to add a new burger
    // update page
})

router.put("/", function(request, response){
    // call burger.update to update a new burger
    // update page
})

module.exports = router;