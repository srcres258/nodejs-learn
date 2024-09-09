var http = require('http');

function startServer(router, handle) {
    var server = http.createServer(function(req, res) {
        router(handle, req.url, res);
    });

    server.listen(3000, "localhost");
    console.log("Server running at http://localhost:3000");
}

module.exports = {
    startServer
};