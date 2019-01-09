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

// Selects * From 'burgers' Table
//________________________________
router.get("/", function(req, res) {
    burger.all(function(data) {
      var showBurgers = {
        burgers: data
      };
      console.log(showBurgers);
      res.render("index", showBurgers);
    });
});


// Shows 'burgers' Table In JSON Format
//________________________________
router.get("/api/burger_data", function(req, res) {
    burger.all(function(data) {
      var showBurgers = {
        burgers: data
      };
      console.log(showBurgers);
      res.json(showBurgers);
    });
});
  

// Posts To 'burgers' Table
//________________________________
router.post("/api/burgers/", function(req, res) {

    burger.create([
      req.body.burger_name
    ], function(result) {
      // Send back the ID of the new Burger???
      res.json({ id: result.insertId });
    });
});
  


// Switches 'devoured' In 'burgers' Table To True
//________________________________
router.put("/api/burgers/:id", function(req, res) {
    var eatenBurgerID = req.params.id
    var condition = eatenBurgerID;
  
    console.log(condition);
  
    burger.update(condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        console.log("Result: " + result)
        res.status(200).end();
        res.status(200).end();
      }
    });
});
  
  

// Exports 'router' For Use By server.js
//================================
module.exports = router;
  