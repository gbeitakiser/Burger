// Contains boilerplate code to handle user input from front end (which is sent through burgers_controller.js)
// and sends it to orm so request can be understood by MySQL. MySQL is then read/updated accordingly.


// Requirements
//================================
var orm = require("orm.js");



// * Inside `burger.js`, create the code that will call the ORM functions using burger 
// specific input for the ORM.


var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) { // Check variables that go into this
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) { // Check variables that go into this
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) { // Check variables that go into this
        cb(res);
      });
    }
  };


// Exports 'burger' For Use By burgers_controller.js
//================================
module.exports = burger;
  