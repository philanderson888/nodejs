var fs = require ('fs');
var readStream = fs.createReadStream('abc.txt');
var writeStream = fs.createWriteStream('abcde.txt',{flags:'a'});
readStream.pipe(process.stdout);
console.log(' ');
readStream.pipe(writeStream);
