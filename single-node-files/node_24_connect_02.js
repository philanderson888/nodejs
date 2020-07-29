/**
 * Created by Phil on 13/01/2016.
 */
var connect=require('connect');
var http=require('http');
var app=connect();

function profile(request,response){
    console.log('User Requested Profile');
}

function forum(request,response){
    console.log('User Requested Forum');
}

app.use('/profile', profile);
app.use('/forum', forum);
http.createServer(app).listen(8888);
console.log('listening port 8888');

