// ==============================_types_of_function_==============================
// type 1. function statement => two type of fn -> definition, invocation
// define
function sayHello(param) {
    console.log("hello", param);
    return "adfgh";
}

// function invocation
sayHello(10);
console.log("``````````````````");
sayHello("Hello");
console.log("``````````````````");
sayHello([1, 2, 3, 4, 5]);
console.log("``````````````````");
sayHello({ name: "Jasbir" });
console.log("``````````````````");
let rVal = sayHello();
console.log("rVal",rVal);

/*function are first class citizens
=> funtion are treted as a veriable*/
// type 2. function expression
let fnContainer = function() {
    console.log("I am an expression");
    console.log("I am also an anonymous function");
}
fnContainer();

// type 3. IIFE -> Immediately Invoked Function Expression
(function fn() {
    console.log("I am IIFE");
    console.log("I will run on my own");
})();

// type 4. Arrow function
let fn = num => num * num;
console.log(fn(5));

/*First class citizen
Function are treted as a veriable
1. assignment -> fn expression
    veriable can be passed as a paarameter
2. Function can be passed as a paramer
    variable can be returned from a function
3. function can be returned from a function*/

function sayHello1(param) {
    console.log("hello", param);
    param();
    return "aasdfg";
}

function smaller() {
    console.log("Hello I am a smaller");
}

// sayHello1([1, 2, 3, 4]); // veriable passed as a paramer
let rVal1 = sayHello1(smaller); // function passed as a paramer;
console.log(rVal1);

function outer() {
    console.log("I am an outer function, returning inner function");
    return function () {
        console.log("I am an inner function");
    }
}

let rVal2 = outer();
console.log("rVal : ", rVal2);
rVal2();