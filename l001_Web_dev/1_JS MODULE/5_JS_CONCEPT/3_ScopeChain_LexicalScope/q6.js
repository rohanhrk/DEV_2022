var myVar = 10;

function b() {
    var myVar = 20;
    console.log("5", myVar);
    c();
    function c() {
        console.log("8", myVar);
    }
    console.log("10", myVar);
}
console.log("12", myVar);
function a() {
    var myVar = 30;
    console.log("15", myVar);
    b();
    console.log("17", myVar);
}
console.log("19", myVar);
a();
console.log("21", myVar);