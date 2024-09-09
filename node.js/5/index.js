var fs = require('fs');

// var demo = fs.readFileSync('demo.txt', 'utf8');

// // console.log(demo);
// fs.writeFileSync('demo1.txt', demo);

// console.log('File copied successfully!');

// ----------------

var demo = fs.readFile('demo.txt', 'utf8', function(err, data) {
    fs.writeFileSync('demo1.txt', data, function() {
        console.log('File copied successfully!');
    });
});

// var waitTill = new Date(new Date().getTime() + 4 * 1000);
// while (waitTill > new Date()) {}

// console.log('File read successfully!');