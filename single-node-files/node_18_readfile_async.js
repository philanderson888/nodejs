/* this works if abc.txt has data in json format */

var fs = require ('fs');
var text_output;
fs.readFile('abc.txt',function(error,data){
	if(error){
		console.log(error);
		return;
	}
	console.log(data);
	console.log(data.toString());
	var myJSON = JSON.parse(data.toString());
	console.log(myJSON);
	console.log(myJSON.a);
	console.log(myJSON.b);
});
