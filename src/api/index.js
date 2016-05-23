'use strict';

var express = require('express');

var router = express.Router();
var guestData = require('../../mock/guestsMock');

router.get('/guests', function(req, res) {
  res.json(guestData);
});

module.exports = router;
