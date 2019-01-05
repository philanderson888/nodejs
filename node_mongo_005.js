var http=require('http');
var qs=require('querystring');
var MongoClient = require('mongodb').MongoClient;
var assert=require('assert');
var url='mongodb://localhost:27017/test';


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


var insertDocuments2 = function(db, POST_username, POST_postcode, POST_youtubeUrl, POST_dateWatched, POST_videoWatched, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  var d = new Date();
  collection.insert({timestamp : d, username : POST_username, postcode : POST_postcode, youtubeUrl : POST_youtubeUrl , dateWatched : POST_dateWatched , videoWatched : POST_videoWatched }, function(err, result) {
    assert.equal(err, null);
    //assert.equal(3, result.result.n);
    console.log("Result Length Is " + result.result.n);
    //assert.equal(3, result.ops.length);
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
    console.dir("Number of records found total in database = " + docs.length);
    callback(docs);
  });
}



var findDocuments2 = function(db, req,res, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({"youtubeUrl":/.*http.*/}).toArray(function(err, docs) {
    assert.equal(err, null);
    res.write("<h2>Found the following records\n\n</h2>");
    res.write("<h3>" + JSON.stringify(docs) + "</h3>");
    callback(docs);
  });
}




function httpResponse(req,res){
  var POST={};
  if(req.method=='GET'){
    console.log('HTTP GET request received');
    MongoClient.connect(url,function(err,db){
      console.log('Connected to Mongo DB');
      res.writeHead(200,"Content-Type","text/html");
      res.write('<html><form method="POST" action="http://localhost:8081"><input type="text" name="username" value="joe"><br /><input type="text" name="postcode" value="EN2 5AA"><br /><input type="text" name="youtubeUrl" value="" placeholder="Youtube URL"><br /><input type="text" name="dateWatched" value="" placeholder="Date Watched"><br /><input type="text" name="videoWatched" value="" placeholder="watched Yes/No"><br /><button type="submit">Submit</button></form>');
      findDocuments2(db, req,res, function() {
        res.end('</html>');
        db.close();
      });
    });  /* MONGOCLIENT.CONNECT() */    
  }
  if(req.method=='POST'){
        console.log('HTTP POST request received');
        res.write('Processing HTTP POST data\n\n');
        req.on('data',function(data){
          console.log(data);
          console.log(data.toString);
            data = data.toString();
            data = data.split('&');
            for (var i = 0; i < data.length; i++) {
               var _data = data[i].split("=");
               POST[_data[0]] = _data[1];
            }
            console.log(POST);
        });
        req.on('end',function(){
            res.write(JSON.stringify(POST));
            res.write("\n\nUsername is " + POST.username);
            res.write("\n\nPostcode is " + POST.postcode);
            res.write("\n\nURL is " + POST.youtubeUrl);
            res.write("\n\nDate Watched is " + POST.dateWatched);
            res.write("\n\nVideo Watched (Yes/No) is " + POST.videoWatched);

            MongoClient.connect(url,function(err,db){
            console.log('Connected to Mongo DB');
            var collection = db.collection('documents');
            insertDocuments2(db, POST.username, POST.postcode, POST.youtubeUrl, POST.dateWatched,POST.videoWatched,function() {
              res.write('\n\nInserted 3 documents\n\n');
              findDocuments2(db, req,res, function() {
                res.end();
                db.close();
              }); 
            });
           });  /* MONGOCLIENT.CONNECT() */




        })
  }
} /* function httpResponse */
var httpServer=http.createServer(httpResponse);
httpServer.listen(8081);
console.log('Listening 8081');



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


