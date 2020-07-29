var request = require("request");
var node_jasmine_01_web_server=require('./node_jasmine_test_01_web_server.js');
var base_url = "http://localhost:8081/";
describe("Hello World Test", function(){
	describe("GET /", function() {
		it("returns status code 200", function() {
		  request.get(base_url, function(error, response, body) {
 				expect(response.statusCode).toBe(200);
 				done();
			});
		});
		it("returns Hello World", function() {
		  request.get(base_url, function(error, response, body) {
 				expect(body).toBe("Hello World");
 				helloWorld.closeServer();
 				done();
			});
		});
	});
});