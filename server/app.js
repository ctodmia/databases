var express = require('express');
var db = require('./db');
var http = require('http');
// var messages = require('./request-handler.js');
// var utils = require('./utils.js');
var url = require('url');
// var Backbone = require('./bower_components/backbone/backbone.js')
// var jQuery = require('jqery');
// var basic = require('./basic-server.js')

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

