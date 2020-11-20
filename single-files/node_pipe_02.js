var fs = require ('fs');
var readStream = fs.createReadStream('abcde.txt');
var writeStream = fs.createWriteStream('abcdef.txt',{flags:'a'});
writeStream.on('pipe',function(source){
	console.log('pipe event');
	console.log(source === readStream);
});

readStream.pipe(writeStream);
