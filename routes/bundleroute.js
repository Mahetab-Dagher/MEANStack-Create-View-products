var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/app', express.static(path.join(__dirname, 'js','app')));

module.exports = router;