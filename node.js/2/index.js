function sayHi() {
    console.log("Hi!");
}

var sayBye = function(name) {
    console.log("Bye, " + name + "!");
}

function callFunction(callback, name) {
    callback(name);
}

callFunction(sayBye, "John");

callFunction(function(name) {
    console.log("Hello, " + name + "!");
}, "Jane");