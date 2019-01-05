/* Trainer note - works with xampp not xampp3 */
var mysql = require('mysql');
var conn = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"test",
});
var queryString = "select * from test";
conn.query(queryString,function(error, results){
	if(error){
		throw(error);
	}
	else{
		console.log(results);
		for (var i=0;i<results.length;i++){
			console.log("Row " + i + " : ID " + results[i].id + " : Name " + results[i].name);
		}
	}
});
conn.end();