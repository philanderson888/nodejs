var fs = require ('fs');
var stream = require('stream');
var loopCounter = 0;

var loop = setInterval(function(){

	loopCounter++;

	var writeableStream = fs.createWriteStream('abcd.txt',{flags:'a'});
  var dateToWrite = new Date().toString() + '\n\n';
  console.log(dateToWrite);
  var streamToWrite = new stream.Readable();
  streamToWrite.push(dateToWrite);
  streamToWrite.push(null);

  if(loopCounter<5){
	  streamToWrite.pipe(writeableStream,{end:false});
  }
  else{
	  streamToWrite.pipe(writeableStream,{end:true});
	  debugger;
	  writeableStream.close();
	  writeableStream.emit('close');
  	debugger;
  	clearInterval(loop);
  }


  writeableStream.on('finish',function(){
  	debugger;
  	console.log("Finishing the write");
  	var streamToWrite2 = new stream.Readable();
  	streamToWrite2.push("Finishing The Write");
  	streamToWrite2.push(null);
  	streamToWrite2.pipe(writeableStream,{end:false});
  });

},1000);

