// Non premitive => array, objects, function
// function definitiion
function sayHi(param) {
    console.log("hello from sayHi");
    console.log("param recieved " + param);

    let rval = Math.random() > 0.5 ? true : "less than 0.5";
    return rval;
}

// function call
sayHi();
sayHi(10);
sayHi("hello");
let rval = sayHi([1, 2, 3, 4, 5]);
console.log("rval " + rval);