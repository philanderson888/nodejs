/* Stream Write Synchronous 
   Writes several times to a text file 
   Using a string as the input 
   Different message on initial and final lines
   */
   	`
var fs = require('fs');
var loopCounter = 0;
var writeStream;
var myDate;

var loop = setInterval(function(){
	loopCounter++;
	writeStream = fs.createWriteStream('abcd.txt',{flags:'a'});
	myDate = "\n" + new Date().toString();

	if (loopCounter == 1) {
		writeStream.write('\n\n============================================');
	}

	writeStream.write('\nWriting Line ' + loopCounter + " at ");
	writeStream.write(myDate);
	writeStream.end();



	writeStream.on('finish',()=>{
		console.log('One Loop Write Complete ' + loopCounter);	
	}); 



	if(loopCounter>=5){
		setTimeout(function(){
			clearInterval(loop);
			writeStream = fs.createWriteStream('abcd.txt',{flags:'a'});
			myDate = "\n" + new Date().toString();
			writeStream.write('\nFinal Write at ' + myDate);
			writeStream.end();
			writeStream.on('finish',()=>{
				console.log('All writes finished');	
			}); 			
		},1000);
	}
},1000);


