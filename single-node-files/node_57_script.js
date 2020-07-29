var exec = require('child_process').exec;

//EXEC PROCESS RUNS; CALLBACK ONLY FIRES WHEN CHILD PROCESS TERMINATES
// THIS IS DEFAULT (ONLY) BEHAVIOUR WHEN RUNNING CHILD_PROCESS.EXEC 

exec('node ./node_57_server_child_process.js', function(error,stdout,stderr){
  console.log('stdout: ', stdout);
  console.log('stderr: ', stderr);
  if(error !== null){
  	console.log('exec error: ', error);
  }
});