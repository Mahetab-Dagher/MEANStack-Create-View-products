var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/app', express.static(path.join(__dirname, 'js', 'app')));

module.exports = router;
