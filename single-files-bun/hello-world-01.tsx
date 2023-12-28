const server = Bun.serve({
    port: 3000,
    fetch(request) {
        console.log('sending response on port ' + this.port)
        return new Response("Welcome to Bun!");
    },
  });
console.log(`Listening on localhost:${server.port}`);
