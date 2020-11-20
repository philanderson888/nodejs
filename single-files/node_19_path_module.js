/*
 * Created by Phil on 08/01/2016.
 */
var path = require('path');

var path_to_file = "mydomain.com/root/index.htm";

console.log('Working with the PATH module');
console.log('============================');

console.log("Normalised path is " + path.normalize(path_to_file));
console.log("Dirname = " + path.dirname(path_to_file));
console.log("Basename = " + path.basename(path_to_file));
console.log("Extension Is " + path.extname(path_to_file));



var parentFolder = "parentFolder";
var childFolder = "childFolder";
var totalFolderPath = parentFolder + path.sep + childFolder;
console.log("The Path Separator Is " + path.sep);
console.log("Total Path Is" + totalFolderPath);


console.log("Current Working Directory is " + __dirname);
console.log("Full Path To Current File Is " + __filename);