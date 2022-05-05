console.log(varName);
var varName;
console.log(varName);
varName = 10;
console.log(varName);

fn();
function fn() {
    console.log("Hello from fn");
}
fn();

console.log(fnexp);
// fnexp();
var fnexp = function() {
    console.log("I am an expression");
}
fnexp();