'use strict';

var express = require('express');

var app = express();

app.use('/host', express.static('public'));

app.listen(3000, function() {
  console.log('The server is running on port 3000');
});
