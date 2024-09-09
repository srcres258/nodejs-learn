var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/json'});
    // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // // res.end('Hello, world!\n');
    // myReadStream.pipe(res);
    var obj = {
        name: 'John',
        age: 30
    };
    res.end(JSON.stringify(obj));
});

server.listen(3000, "localhost");
console.log('Server running at http://localhost:3000/');