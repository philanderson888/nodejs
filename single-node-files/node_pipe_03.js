var fs = require ('fs');
var readStream = fs.createReadStream('abc.txt');
var writeStream = fs.createWriteStream('abcd.txt',{flags:'a'});

readStream.pipe(process.stdout);

readStream.pipe(writeStream);

