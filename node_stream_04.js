/* Read from one file and append to another */
var fs = require ('fs');
var readableStream; 
var writeableStream; 
var data = '';

for (var i = 1;i<20;i++){
	readableStream = fs.createReadStream('abc.txt');
	data = '';
	readableStream.setEncoding('UTF8');
	writeableStream = fs.createWriteStream('abcd.txt',{flags:'a'});
	
	readableStream.on('data',function(chunk){
			console.log('Chunk is ' + chunk);
			writeableStream.write(chunk,'UTF8');
	});

	readableStream.on('end',function(){
		console.log('Finished reading stream');
		writeableStream.end();
	});

	writeableStream.on('finish',function(){
		console.log('Write complete to abcd.txt');
	});

}

