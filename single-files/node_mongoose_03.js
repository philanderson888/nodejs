var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url='mongodb://localhost/test';
var assert=require('assert');
mongoose.connect(url);
var con = mongoose.connection;

con.on('error',function(){
	console.log('error connecting to database via mongoose');
});

con.once('open',function(db, callback) {

	console.log('connected to database');
	var mySchema = mongoose.Schema({
		name: String
	});
	var myModel = mongoose.model('myModel',mySchema);
  var myObject01 = new myModel({name:'testName'});
  console.log(myObject01.name);

});



var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1234}, {a : 2234}, {a : 3333}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}



var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
}


	

MongoClient.connect(url,function(err,db){
	console.log('Connected to Mongo DB');
	var collection = db.collection('documents');
  insertDocuments(db, function() {
	  findDocuments(db, function() {
	    db.close();
	  });
  });
});  /* MONGOCLIENT.CONNECT() */








