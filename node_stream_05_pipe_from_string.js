/* Pipe multiple streams to one output text file
		One input is from a file
		other stream is from a string
 */
		var fs = require ('fs');
		var stream = require('stream');

	setInterval(function(){


		var readableStream = fs.createReadStream('abc.txt');
		readableStream.setEncoding('UTF8');
 		var writeableStream = fs.createWriteStream('abcd.txt',{flags:'a'});
		var data = '';
		var myDate = new Date().toString() + "\n\n";
		console.log(myDate);

		readableStream.pipe(writeableStream,{end:false});

		var stream2 = new stream.Readable();
		stream2.push(myDate);
		stream2.push(null);
		stream2.pipe(writeableStream,{end:false});
	
		readableStream.on('end',function(){
			console.log('Finished reading stream');
		});

	},1000);  /* Timeout */






