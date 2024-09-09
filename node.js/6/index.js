// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/demo.txt');
// myReadStream.setEncoding('utf8');

// var data = '';

// myReadStream.on('data', function(chunk) {
//     data += chunk;
// });

// myReadStream.on('end', function() {
//     console.log(data);
// });

// ----------------

// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/demo.txt', "utf8");
// var myWriteStream = fs.createWriteStream(__dirname + '/output.txt');

// myReadStream.on('data', function(chunk) {
//     myWriteStream.write(chunk);require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/demo.txt', "utf8");
// var myWriteStream = fs.createWriteStream(__dirname + '/output.txt');

// myReadStream.on('data', function(chunk) {
//     myWriteStream.write(chunk);
// });

// myReadStream.on('end', function() {
//     myWriteStream.end();
//     console.log('File has been copied successfully!');
// });
// });

// myReadStream.on('end', function() {
//     myWriteStream.end();
//     console.log('File has been copied successfully!');
// });

// ----------------

// var fs = require('fs');

// var myWriteStream = fs.createWriteStream(__dirname + '/output.txt');

// var myData = 'Hello World!';
// myWriteStream.write(myData);
// myWriteStream.end();
// myWriteStream.on('finish', function() {
//     console.log('File has been written successfully!');
// });

// ----------------

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/demo.txt', "utf8");
var myWriteStream = fs.createWriteStream(__dirname + '/output.txt');

myReadStream.pipe(myWriteStream);