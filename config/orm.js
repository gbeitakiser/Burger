// Dependancy
var connection = require("../config/connection.js");

var orm = {

    // eeeeeeeeeeeeeeeee
    // Example

    // The last variable cb represents the anonymous function being passed from server.js
    selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    // +++++++++++++++++++++
    // My Code

    // Select All Function
    selectAll: function() { // Insert methods into function parenthasis
        // Code here
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, "//METHODS", function(err, result) {
            // More code here
        });
    },

    // Insert One Function
    insertOne: function() { // Insert methods into function parenthasis
        // Code here
        var queryString = "INSERT INTO burgers (burger_name) VALUES ??";
        connection.query(queryString, "//MORE METHODS", function(err, result) {
            //More code here
        })
    },

    // Update One Function
    updateOne: function() { // Insert methods into function parenthasis
        // Code here
        var queryString = ""; // Finish this part
        connection.query(queryString, "//MORE METHODS", function(err, result) {
            //More code here
        })
    }
  };
  
  module.exports = orm;