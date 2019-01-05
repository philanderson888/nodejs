/**
 * Created by Phil on 13/01/2016.
 */

var connect = require('connect');
var http = require('http');
var app = connect();
function doFirst(request,response,next){
    console.log("First test is running");
    next();
}
function doSecond(request,response,next){
    console.log("Second test is running");
}
app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log('Server listening port 8888');