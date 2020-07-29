/**
 * Created by Phil on 13/01/2016.
 */
var http=require('http');
var connect=require('connect');
var fs = require('fs');
var url=require('url');
var app=connect();

function doFirst(request,response,next){
    console.log('first function');
    next();
}
function doSecond(request,response,next){
    console.log('second function');
    fnWebServer(request,response);
    next();
}
function fnWebServer(request,response) {
    console.log('Request has come in');
    var urlParts = url.parse(request.url);
    console.log('Incoming request is ' + request);
    console.log('Request URI is ' + request.uri);
    console.log('Request URL is ' + request.url);
    console.log('Request URN is ' + request.urn);
    console.log('URL Part is ' + urlParts);
}

function profile(request,response){
    console.log('request for Profile page has come in');
}
app.use(doFirst);
app.use(doSecond);
app.use('/profile',profile);
http.createServer(app).listen(8888);
console.log('listening port 8888');