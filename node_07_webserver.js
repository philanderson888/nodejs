var express = require('express');
var app = express();
app.get('/',function(req,res){
	var x = "Hello World " + "Hello World2";
	res.send(x);
});
app.listen(3000);