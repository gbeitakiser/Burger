var connection = require("../config/connection.js");

var orm = {
    // The last variable cb represents the anonymous function being passed from server.js
    selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },


    // My Code

    selectAll: function() { // Insert methods here
        // Code here
    },

    insertOne: function() { // Insert methods here
        // Code here
    },

    updateOne: function() { // Insert methods here
        // Code here
    }
  };
  
  module.exports = orm;