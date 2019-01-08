// Takes in data sent by front-end Javascript and inputs it into both the Express and MySQL databases.
// It does this by creating a route to Express and updating that database using CRUD methods, then sending 
// data through to burger.js so that MySQL database can be read/updated too. 



// Requirements
//================================
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");



// Router Functions
//================================

// Selects * From 'burgers' Table   //(change code inside here)
//________________________________
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});
  

// Posts To 'burgers' Table   //(change code inside here)
//________________________________
router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured // Make sure req.body names remain consistent 
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});
  


// Switches 'devoured' In 'burgers' Table To True   //(change code inside here)
//________________________________
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      sleepy: req.body.sleepy
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});
  
  

// Exports 'router' For Use By server.js
//================================
module.exports = router;
  