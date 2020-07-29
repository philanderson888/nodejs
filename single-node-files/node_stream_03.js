/* Read one text file and write to another */
var fs = require('fs');
var readableStream = fs.createReadStream('abc.txt');
var writeableStream = fs.createWriteStream('abcd.txt');
var data = '';
readableStream.setEncoding('UTF8');

readableStream.on('data',function(chunk){
	console.log('Chunk is' + chunk);
	writeableStream.write(chunk,'UTF8');
});

readableStream.on('end',function(){
	console.log('Finished reading stream');
	writeableStream.end();
});

writeableStream.on('finish',function(){
	console.log('Write complete to abcd.txt');
});