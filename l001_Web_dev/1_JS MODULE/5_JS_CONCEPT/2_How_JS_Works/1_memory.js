// code outsite function -> global area
// console.log(global);
// console.log(this);

// variables
console.log("a is ", a);
var a;
console.log("a is ", a);
a = 10;
console.log("a is ", a);

// // function statement
fn();
function fn() {
    console.log("I can be called before my declaration");
}
fn();