'use strict';

var express = require('express');

var router = express.Router();

router.get('/guests', function(req, res) {
  res.json([
            {"name": "Ricky"},
            {"name": "Julian"},
            {"name": "Bubbles"}
           ]);
});

module.exports = router;
