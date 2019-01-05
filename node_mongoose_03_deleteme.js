var http=require('http');
var qs=require('querystring');
var MongoClient = require('mongodb').MongoClient;
var assert=require('assert');
var url='mongodb://localhost:27017/test';
var mongoose2 = require('mongoose');

MongoClient.connect(url,function(err,db){
	if(err){
		console.log('Could not connect to database');
		return;
	}
  console.log('Connected to Mongo DB');
 });  

mongoose2.connect(url, function(err,db){
	if(err){
		console.log('Could not connect to database');
	}
});




