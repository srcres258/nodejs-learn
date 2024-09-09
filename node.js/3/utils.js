var adder = function(a, b) {
    return `this num of the 2 numbers is: ${a + b}`;
}

var counter = function(arr) {
    return "there are " + arr.length + " elements in the array";
}

module.exports = {
    adder: adder,
    counter: counter
}