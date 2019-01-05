var exec=require('child_process').exec;
var child=exec('nodemon ./node_58_server_child_process.js');

	console.log("Parent has process id of " + process.pid);
	console.log("Child has process id " + child.pid);
	console.log('child process successfully started');

child.stdout.on('data',function(data){
  console.log('stdout: ' + data);
});
child.stderr.on('data',function(data){
  console.log('stderr: ' + data);
});
child.on('close',function(code){
  console.log('closing child process with code ' + code);
});