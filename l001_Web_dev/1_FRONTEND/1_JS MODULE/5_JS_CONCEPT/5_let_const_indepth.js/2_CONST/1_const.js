/*
    i. const variable can not be reassign nor be redclare
    ii. const variable must be assigned value when they are declared
    iii. unlike let variable, const varables also have "temporal dead zone"
*/ 

// incorrect
// const a; // SyntaxError: Missing initializer in const declaration

// correct
const a = 10; // not give error
console.log(a);

const arr = [1, 2, 3, 4, 5];
arr.shift();
console.log(arr);