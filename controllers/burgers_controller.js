var express = require("express")
var router = express.Router();

// Import the "burger" model (burger.js)
var burger = require("../models/burger.js")

// Routes
router.get("/", function(request, response){
    // call burger.all to get all burger data
    burger.all(function(data){
        var viewObj = {
            burgers: data
        }
        // render view through handlebars
        response.render("index", viewObj)
    })
})

router.post("/api/add", function(request, response){
    // call burger.insert to add a new burger
    burger.insert(request.body.burgerName,function(result){
        console.log("Controller Burger Added");
        response.json({ id: result.insertId });
    });
})

router.put("/api/update/:id", function(request, response){
    var burgerId = request.params.id;
    // call burger.update to update a new burger
})

module.exports = router;