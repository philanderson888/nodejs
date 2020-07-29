var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var con = mongoose.connection;
con.on('error',function(err){
	console.log('Could not connect to database');
	console.log(err)
});

con.once('open',function(){
	console.log('connected to database');
});
