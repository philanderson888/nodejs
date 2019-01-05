var fs = require('fs');
fs.access('./abc.txt',function(err){
	if(err){
		console.log(error);
	}
	else{
		console.log('success');
		console.log("Read OK with code : " + fs.R_OK);
		console.log("Write OK with code : " + fs.W_OK);
	}
});


fs.access('/abc.txt', fs.R_OK | fs.W_OK, (err) => {
  console.log(err ? 'no access!' : 'can read/write');
});


fs.access('./abc.txtee',function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log('success');
		console.log("Read OK with code : " + fs.R_OK);
		console.log("Write OK with code : " + fs.W_OK);
	}
});
