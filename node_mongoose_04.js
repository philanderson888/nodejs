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
  var myObject01 = new myModel({name:'testName2'});
  console.log(myObject01.name);
  var data = myObject01;
  MongoClient.connect(url,data, function(err,db){
    console.log('Connected to Mongo DB');
    var collection = db.collection('documents');
    insertDocuments(db, data, function() {
      findDocuments(db, function() {
        db.close();
      });
    });
  });  /* MONGOCLIENT.CONNECT() */









});



var insertDocuments = function(db, data, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents

  collection.insertMany([
    {a : 1}, {a : 2}, {a : 4, name:data.name},
    {a : 5, name:data.name}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(4, result.result.n);
    assert.equal(4, result.ops.length);
    console.log("Inserted 4 documents into the document collection");
    callback(result);
  });
}



var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({"a":{$gte:4}}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}