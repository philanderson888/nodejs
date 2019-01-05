var mongoose = require('mongoose');
var url='mongodb://localhost/test';
mongoose.connect(url);
var con = mongoose.connection;

con.on('error',function(){
	console.log('error connecting to database via mongoose');
});

con.once('open',function(){
	console.log('connected to database');
	var mySchema = mongoose.Schema({
		name: String
	});
	var myModel = mongoose.model('myModel',mySchema);
  var myObject01 = new myModel({name:'testName'});
  console.log(myObject01.name);
});


