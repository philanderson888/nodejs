var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var port = process.env.PORT || 8081;
var users = require('./models/users')


router.get('/users', function (req, res) {
		console.log('Inside users route');
    res.json( users.getUsers() );
});


router.get('/api/test', function (req, res) {
	console.log('Inside every other api route');
	res.send('invalid route : try /api/users instead');
});

router.get('/api/users', function (req, res) {
		console.log('Inside users route');
    res.json( users.getUsers() );
});

function first(req,res,next){
	console.log('hello');
	next();
};
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', router);

app.use('/api', first,router);
app.use('/users',function(req,res,next){
	console.log('request to users handled in middleware');
	next();
});
app.get('/users', function(req,res){
	console.log('request to users');
	res.json(users.getUsers());
});
app.get('/', function(req,res){
	console.log('get request');
	res.send('Get request to default route');
});


app.listen(port, function(){
    console.log('Server at ', port);
});
