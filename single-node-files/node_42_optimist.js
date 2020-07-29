var optimist=require('optimist');
var argv=optimist.argv;
if(argv.s){
	console.log('s is true');
}
if(argv.t){
	console.log('t is true');
}