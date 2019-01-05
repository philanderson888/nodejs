'use strict';

var Hapi = require('hapi');  // hapi module

var server = new Hapi.Server();  // create server
server.connection({port: 3000}); // listing on port 3000

// create a route GET /
// respond Hello World
server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply('Hello World');
    }
});


// Start the server, throw errors
server.start( function(err){
    if (err) {
        throw err;
    }

    console.log('Server is running at:', server.info.uri);
});
