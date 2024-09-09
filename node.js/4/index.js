var events = require('events');
var util = require('util');

// // 创建事件对象
// var myEmitter = new events.EventEmitter();

// // 设置事件监听器
// myEmitter.on("someEvent", function(message) {
//     console.log(message);
// })

// // 触发事件
// myEmitter.emit("someEvent", "The event was emitted!");

// ----------------

// var Person = function(name) {
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var xiaoming = new Person("xiaoming");
// var lilei = new Person("lilei");

// var people = [xiaoming, lilei];

// people.forEach(function(person) {
//     person.on("speak", function(message) {
//         console.log(person.name + " says: " + message);
//     });
// });

// xiaoming.emit("speak", "Hello, everyone!");
// lilei.emit("speak", "Nice to meet you!");

// ----------------

class Person extends events.EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}

var xiaoming = new Person("xiaoming");
var lilei = new Person("lilei");

var people = [xiaoming, lilei];

people.forEach(function(person) {
    person.on("speak", function(message) {
        console.log(person.name + " says: " + message);
    });
});

xiaoming.emit("speak", "Hello, everyone!");
lilei.emit("speak", "Nice to meet you!");