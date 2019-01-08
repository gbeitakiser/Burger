// Contains boilerplate code to handle user input from front end (which is sent through burgers_controller.js)
// and sends it to orm so request can be understood by MySQL. MySQL is then read/updated accordingly.


// Requirements
//================================
var orm = require("../config/orm.js");



// Burger Variable
//================================
var burger = {

    // Selects * From 'burgers' Table
    //________________________________
    all: function(cb) {
      orm.selectAll("burgers", function(res) { // Check variables that go into this
        cb(res);
      });
    },


    // Posts To 'burgers' Table   //(change code inside here)
    //________________________________
    create: function(burgerName, cb) {
      orm.insertOne("burgers", burgerName, function(res) {
        cb(res);
      });
    },


    // Switches 'devoured' In 'burgers' Table To True   
    //________________________________
    update: function(idNumber, cb) {
      orm.updateOne("burgers", idNumber, function(res) { // Ensure that front-end input picks burgers by id number or change this code to pick by name
        cb(res);
      });
    }
  };


// Exports 'burger' For Use By burgers_controller.js
//================================
module.exports = burger;
  