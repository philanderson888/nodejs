var http=require('http');
var MongoClient = require('mongodb').MongoClient;
var assert=require('assert');
var url='mongodb://localhost:27017/test';
var httpResponse = function(req,res){
	MongoClient.connect(url,function(err,db){
	console.log('Connected to Mongo DB');
	var collection = db.collection('documents');
	var updateName='phil anderson';
  insertDocuments2(db, updateName, function() {
    res.write('Inserted 3 documents\n\n');
	  findDocuments2(db, req,res, function() {
	    res.end();
	    db.close();
	  }); 
  });
 });  /* MONGOCLIENT.CONNECT() */
};
var httpServer=http.createServer(httpResponse);
httpServer.listen(8080);
console.log('Listening 8080');

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {name : 'phil'} 
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    console.log("Result Length Is " + result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Result.ops.length = " + result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}


var insertDocuments2 = function(db, updateName, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {name : updateName} 
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    console.log("Result Length Is " + result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Result.ops.length = " + result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}


var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });  
}

var deleteDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.deleteOne({ a : 3 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
}


var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records\n\n");
    console.dir(docs);
    callback(docs);
  });
}



var findDocuments2 = function(db, req,res, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    res.write("Found the following records\n\n");
    res.write(JSON.stringify(docs));
    res.end();
    callback(docs);
  });
}


MongoClient.connect(url,function(err,db){
	console.log('Connected to Mongo DB');
	var collection = db.collection('documents');
  insertDocuments(db, function() {
      db.close();
  });
 });  /* MONGOCLIENT.CONNECT() */

MongoClient.connect(url,function(err,db){
	console.log('Connected to Mongo DB');
	var collection = db.collection('documents');
  updateDocument(db, function() {
      db.close();
   });
 });  /* MONGOCLIENT.CONNECT() */

MongoClient.connect(url,function(err,db){
	console.log('Connected to Mongo DB');
	var collection = db.collection('documents');
/*  deleteDocument(db, function() {
    db.close();
  });
*/
 });  /* MONGOCLIENT.CONNECT() */


MongoClient.connect(url,function(err,db){
	console.log('Connected to Mongo DB');
	var collection = db.collection('documents');
  findDocuments(db, function() {
    db.close();
  }); 
 });  /* MONGOCLIENT.CONNECT() */


