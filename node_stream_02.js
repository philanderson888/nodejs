var fs = require('fs');
var writeData = "Hello World";
var writeStream = fs.createWriteStream('abcd.txt');
writeStream.write(writeData,'UTF8');
writeStream.end();
writeStream.on('finish',function(){
	console.log("Write completed");
});