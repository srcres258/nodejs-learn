// console.log("Node");
// console.info("信息");
// console.error("信息");

// setTimeout(function(){
//     console.log("定时器");
// }, 3000);

// var i = 0;
// setInterval(function(){
//     i++;
//     console.log(i);
// }, 1000);

var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log("time: " + time);
    if (time > 6) {
        clearInterval(timer)
    }
}, 1000)

console.log(__dirname);
console.log(__filename);