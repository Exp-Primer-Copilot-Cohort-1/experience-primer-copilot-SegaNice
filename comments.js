// Create web server
var express = require('express');
var app = express();

// Create a route
app.get('/', function(req, res) {
  res.send('Hello, world!');
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running...');
});