const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question('Please type something', (answer) => {
	console.log('Thank you');
});