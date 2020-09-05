var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var field2data = 6+12;
  res.render('index', { title: 'Express' , field1: 'Phil'
			, field2: field2data });
});

module.exports = router;
