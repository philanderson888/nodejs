var fs = require('fs');
fs.stat('./abc.txt',function(error,stats){
  if(error){
	console.log("Error " + error);
  }
  else{
	console.log('File Statistics');
	console.log(stats);
	console.log('Is it a file ? ' + stats.isFile());
	console.log('Is it a directory ? ' + stats.isDirectory());
	console.log('Is it a socket ? ' + stats.isSocket());
	console.log('Size is ' + stats.size);
	console.log('Last modified ' + stats.mtime);
  }
});