var http = require('http');
var data = require('./data.json');

function startServer() {
    var server = http.createServer(function(req, res) {
        console.log('Got request for ' + req.url);
        res.writeHead(200, {'Content-Type': 'text/json'});
        // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        // // res.end('Hello, world!\n');
        // myReadStream.pipe(res);
        res.end(JSON.stringify(data));
    });
    
    server.listen(3000, "localhost");
    console.log('Server running at http://localhost:3000/');
}

module.exports = {
    startServer
}
