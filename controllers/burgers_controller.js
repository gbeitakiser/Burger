// Takes in data sent by front-end Javascript and inputs it into both the Express and MySQL databases.
// It does this by creating a route to Express and updating that database using CRUD methods, then sending 
// data through to burger.js so that MySQL database can be read/updated too. 



// Requirements
//================================
var express = require("express");
var burgerJS = require("burger.js") // Make sure this does/doesn't need relative file path


var burger = require("../models/burger.js");



// Create all routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "name", "sleepy"
    ], [
      req.body.name, req.body.sleepy
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
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
  