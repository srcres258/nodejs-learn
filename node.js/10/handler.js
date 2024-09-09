var fs = require('fs');
var data = require('./data.js');

function home(res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/home.html', 'utf8').pipe(res);
}

function user(res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
}

function list(res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var lists = [
        {
            name: 'Steve'
        },
        {
            name: 'Jack'
        }
    ];
    res.end(JSON.stringify(lists));
}

module.exports = {
    home,
    user,
    list
};