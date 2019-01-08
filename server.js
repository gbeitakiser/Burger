// Example From Activity 17

// Requirements
//================================
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();


// Boilerplate app.use
//================================
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Handlebars
//================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import Routes Use From 'burgers_controller.js'
//================================
var routes = require("./controllers/burgers_controller.js");

app.use(routes);



// Start Server
//================================
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});



