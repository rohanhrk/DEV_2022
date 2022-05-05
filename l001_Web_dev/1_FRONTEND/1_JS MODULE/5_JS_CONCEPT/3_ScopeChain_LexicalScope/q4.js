console.log("line number 1 ", varName);
var varName = 10;

function b() {
    console.log("line number 5 ", varName);
}
console.log("line number 7 ", varName);
function fn() {
    console.log("line number 9", varName);
    var varName = 20;
    
    b();
    console.log("line number 13", varName);
}
fn();