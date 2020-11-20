var express = require('express');
var router = express.Router();
var debug = require ('debug')('express_04:server');

/* GET users listing. */


router.get('/', function(req,res,next){
	/*res.send(req.params.id);*/
	console.log('line 10');
  next();
});

router.get('/', function(req,res,next){
  /*res.send(req.params.id);*/
  console.log('line 16');
  res.send('hello');
  
});



router.get('/', function(req, res, next) {
  /* res.send('respond with a resource'); */
    console.log('line 24');
  var enemies = ['Paul', 'Dominic', 'Aaron']; 
  debug("Inside users.js file, in the router.get('/') module");
  res.render('users', { 
    title: 'Express Users Page' 
    , name:'Phil'
    , course: 'Node JS',
                user1:'Rob',
                user2:'Paulineeeee',
                user3:'Beyonce',
              friends:['Peter','Jane','Fred', 'Dominic'],
              enemies:enemies
            }
  	);
});

router.post('/',function(req,res){
	res.send('POST request');
});


router.put('/',function(req,res){
	res.send('PUT request');
});


router.delete('/',function(req,res){
	res.send('DELETE request');
});


module.exports = router;
