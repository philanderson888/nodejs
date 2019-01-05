var fs = require ('fs');
var readStream = fs.createReadStream('abc.txt');




// Flowing mode

readStream.on('data',function(chunk){
	console.log(chunk);
	console.log(chunk.toString());
});

readStream.resume();

readStream.on('end',function(){
	console.log('Finished reading stream');
});