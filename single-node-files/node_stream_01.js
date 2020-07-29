var fs = require ('fs');
var readableStream = fs.createReadStream('abc.txt');
var data = '';
readableStream.setEncoding('UTF8');
readableStream.on('data',function(chunk){
	console.log("Chunk is " + chunk);
	data+=chunk;
});
readableStream.on('end',function(){
	console.log("Final data is " + data);
});