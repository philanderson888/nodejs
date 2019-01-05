var fs = require('fs');

/* Write new file */
console.log('Writing abc.txt containing one string');
fs.writeFileSync("abc.txt","Line 1 - Content inside text file\nLine 2 - second line");

/* Read file as HEX */
console.log("readFileSync reads a file in as a HEX STREAM");
console.log("Reading file abc.txt yields");
console.log(fs.readFileSync("abc.txt"));
console.log();

/* Read file as STRING */
console.log("Putting the HEX as .toString() outputs as a human readable string");
console.log(fs.readFileSync("abc.txt").toString());
console.log();
console.log();

/* Write new file */
console.log('Writing abc.txt containing JSON');
fs.writeFileSync("abc.txt",'{"a":"1","b":"2"}');

/* Read file as HEX */
console.log("readFileSync reads a file in as a HEX STREAM");
console.log("Reading file abc.txt yields");
console.log(fs.readFileSync("abc.txt"));
console.log();

/* Read file as STRING */
console.log("Putting the HEX as .toString() outputs as a human readable string");
console.log(fs.readFileSync("abc.txt").toString());
console.log("Outputting using JSON.parse puts it as JSON also");
console.log(JSON.parse(fs.readFileSync("abc.txt")));
var x = JSON.parse(fs.readFileSync("abc.txt"));
console.log("Field a holds value " + x.a);
console.log("Field b holds value " + x.b);



