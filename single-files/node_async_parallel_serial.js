var async = require('async');
async.parallel([
		function a(){console.log('a has run');},
		function b(){console.log('b has run');}
	],function (err,data){
		console.log(err);
		console.log('Both tasks finished')
	});



