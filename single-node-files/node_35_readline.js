const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
var x=1;
rl.question('Please type something - ', (answer) => {
			console.log('Thank you');
			console.log('You entered the text - ' + answer);
			rl.write('output to screen \n');
});
rl.on('line',(cmd) => {
	console.log(x + ' You just typed : ' + cmd);
	if(x==5){
		console.log('\n*************\n\nPROGRAM FINISHED');
		rl.close();
	}
	x++;
});
