var mysql = require ('mysql');
var pool = mysql.createPool({
	host:"localhost:3306",
	user:"root",
	password:"",
	database:"test"
});
pool.getConnection(function(error,conn){
	var queryString="select * from test";
	conn.query(queryString,function(error,results){
		if(error){
			throw(error);
		}
		else{
			console.log(results);
		}
	});
	conn.release();	
});


