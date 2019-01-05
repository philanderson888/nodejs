var express = require('express');
var router = express.Router();

/* GET home page. */



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , 
  	author:'Robert', name:'Phil', course: 'Node JS'});
});



router.get('/', function(req,res){
	console.log (req.query);
  res.send(req.query.age);
  console.log('Name is ' + req.query.name + ' and age is ' + req.query.age);
});


router.post('/',function(req,res){
	res.send('POST request received from Phil')
});

router.put('/',function(req,res){
  res.send('PUT request received');
});

router.delete('/',function(req,res){
  res.send('Delete request received');
});


module.exports = router;
