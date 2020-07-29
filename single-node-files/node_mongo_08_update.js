var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1', 27017, {});
var client = new mongodb.Db('test', server, {w: 1});

client.open(function(err) {
  console.log('opened database "test"');
  if (err) throw err;
  client.collection('test', function(err, collection) {
    if (err) throw err;
    console.log('opened collection "test"')
    collection.updateOne(
      { "id":100},
      { $set: { test : "test"} }, 
      function(err,results){
        if(err) console.log('error');
        console.log('updated one record');
      });

    /* var _id = new client.bson_serializer.ObjectID('574e74fb24764e9423a69617'); */
    var _id = '574e74fb24764e9423a69617';    
    collection.update(
      {_id: _id},
      {$set: {"title": "I ate too much cake2"}},
      {safe: true},
      function(err) {
        if (err) throw err;
        console.log('updated one record');
      }
    );
  });
});
