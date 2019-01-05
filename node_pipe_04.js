/* Append date to source file 
   Then pipe source to destination file */

var fs = require('fs');

var inputFile = 'abcdef.txt';
var outputFile = 'abcdefg.txt';

/* Append date and time first to end of source file 
   to aid with proving that it's live */
var appendDateStream = fs.createWriteStream(inputFile,{flags:'a'});
var dateAppend = '\n' + new Date().toString();
appendDateStream.write(dateAppend);

var readStream = fs.createReadStream(inputFile);
var writeStream = fs.createWriteStream(outputFile, {flags:'a'});

readStream.pipe(writeStream);
/* readStream.pipe(process.stdout); */

writeStream.on('finish',function(){

	fs.stat(outputFile,function(error,stats){
		if(!error){
			var outputFileSize = stats.size;
			console.log('\n\nWrite finished to ' + outputFile + ' which now has size of ' + outputFileSize/1000000 + 'MB');
		}

	});
	fs.stat(inputFile,function(error,stats){
		if(!error){
			var inputFileSize = stats.size;
			console.log('\n\nWrite finished and ' + inputFileSize/1000000 + ' MB written to file ' + outputFile);
    }
	});
});

