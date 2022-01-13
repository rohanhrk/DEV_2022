// =================_object_=================
/*
    key : value (pair)
    key can be string or number
    value can be all valid type
*/

let object = {
    name : "rohan",
    lastname : "hazarika",
    sayHi : function() {
        console.log("rohan say's hi");
    }
}
console.log(object);
// for in loop
for(let key in object) {
    console.log(key, " ", object[key]);
}
object.sayHi();

// =================_Arrays_=================
/*
    Arrays are special kinds of objects.
    It's behave like an object and their indexes are key and we can store value in key
    and we can set value like an object also changes property;
*/ 
let arr = [1, 2, 3, 4, 5];
arr.myprop = "Hello";
arr.sayHi = function() {
    console.log("Hello from array");
}
for(let key in arr) {
    console.log(key, " : ", arr[key]);
}
console.log(arr);
arr[95] = 100;
console.log(arr);
console.log(arr[23]);

// =================_Function_=================
/*
    function also a special types of object
    key : value
    extra feature -> code property , that can be executed when you invoke them
*/ 

function fn() {
    console.log("hello from fn");
}
fn();
fn.prop = "property of function";
fn.myFn = function() {
    console.log("I am a method of a function");
}
console.log(fn);
fn();
fn.myFn();
console.log(fn.prop);

/*
    JS -> primitive or object
    everything object -> dates, erro, modules, function, array,...........so on
    6 primitive types -> number, string, boolean, undefined, null, symbol
*/ 