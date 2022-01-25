// Load HTTP module
const http = require("http");

// Create HTTP server and listening on port 8000 for request
const PORT = 8000;

http.createServer(function(request, response) {

    // set the response HTTP header with 'HTTP status' and 'Content-type'
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // send the response body "Hello HTTP"
    response.end("Hello HTTP.\n");
}).listen(PORT);

console.log("Server running at 'http://127.0.0.1:8000/'");