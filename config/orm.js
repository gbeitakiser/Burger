// This file sets up logic so that user input from front end can be turned into a format that MySQL can work with.
// It then exports the logic in the orm variable so that burger.js can use it to send data it receives through orm 
// logic and returned as sometjhing MySQL can read, which is then sent through the connection variable so MySQL database
// is read/updated accordingly.

// Requirements
//================================
var connection = require("../config/connection.js");



// Logic to parse data and turn into MySQL commands goes below.



// After that, you need the functions contained in the orm value...


// Orm Variable
//================================
var orm = {

    
    // Example
    //================================

    // The last variable cb represents the anonymous function being passed from server.js
    selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },




    // My Code
    //================================

    // Select All Function
    //________________________________
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            } 
            cb(result);
        });
    },

    // Insert One Function
    //________________________________
    insertOne: function(tableInput, burgerName, cb) { // Insert methods into function parenthasis
        // Code here
        var queryString = "INSERT INTO " + tableInput + " (burger_name) VALUES (" + burgerName + ");";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        })
    },

    // Update One Function
    //________________________________
    updateOne: function(tableInput, idNumber, cb) {
        var queryString = "UPDATE " + tableInput + " SET devoured = NOT 0 WHERE id = " + idNumber + ";"
    
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
              }
              cb(result);
        })
    }
  };
  


// Exports 'orm' For Use By burger.js
//================================
  module.exports = orm;