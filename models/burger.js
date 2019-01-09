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
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },


    // Posts To 'burgers' Table   //
    //________________________________
    create: function(burgerName, cb) {
      orm.insertOne(burgerName, function(res) {
        cb(res);
      });
    },


    // Switches 'devoured' In 'burgers' Table To True   
    //________________________________
    update: function(idNumber, cb) {
      orm.updateOne(idNumber, function(res) {
        cb(res);
      });
    }
  };


// Exports 'burger' For Use By burgers_controller.js
//================================
module.exports = burger;
  