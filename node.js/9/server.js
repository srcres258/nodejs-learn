var http = require('http');
var data = require('./data.json');
var fs = require('fs');

function startServer() {
    var server = http.createServer(function(req, res) {
        console.log('Got request for ' + req.url);
        if (req.url === '/' || req.url === '/home') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.createReadStream(__dirname + '/home.html', 'utf8').pipe(res);
        } else if (req.url === '/api/user') {
            res.writeHead(200, {'Content-Type': 'text/json'});
            res.end(JSON.stringify(data));
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
        }
    });
    
    server.listen(3000, "localhost");
    console.log('Server running at http://localhost:3000/');
}

module.exports = {
    startServer
}
