var mongoose=require('mongoose');
var MongoClient=require('mongodb').MongoClient;
var url = 'mongodb://localhost/test';
mongoose.connect(url);
var con = mongoose.connection;

con.on('error',function(){
	console.log('error connecting to database');
});

con.once('open',function(db){
	console.log('connected to database');
	var mySchema = mongoose.Schema({
		name:String
	});
	var myModel = mongoose.model('myModel',mySchema);
	var myObject = new myModel({name:'testNamePhil'});
	var data = myObject;
	MongoClient.connect(url,data,function(err,db){
		if(err){
			console.log('error connecting to database');
		}
		insertDocuments(db,data,function(){
			findDocuments(db,function(){
				console.log('closing database');
				db.close();
			});
		});
	});
});

var insertDocuments = function(db,data,callback){
	var collection = db.collection('documents');
	collection.insertMany([
		{ id: 111, name:data.name }
		],function(err,result){
			console.log('Inserted document');
			callback(result);
		});
};

var findDocuments = function(db,callback){
	var collection = db.collection('documents');
	collection.find({"id":{$gte:4}}).toArray(function(err,docs){
		console.log('Found the following records');
		console.log(docs);
		callback(docs);
	});
};