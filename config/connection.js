// This file connects to my MySQL database and exports the "connection" variable to orm.js.
// orm.js can then use the connection to conduct CRUD operations on MySQL database.

// Requirements
//================================
var mysql = require("mysql");


// Conncetion Var
//================================
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "", // REMOVE PASSWORD BEFORE PUSHING TO GITHUB
  database: "burgers_db"
});


// Connects Here
//================================
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  
// Exports 'connection' For Use By orms.js
//================================
module.exports = connection;