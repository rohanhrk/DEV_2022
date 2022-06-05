// functional Programming

/*
    1. Pure function -> 
        a) cannot change the value of outer variable -> If it needs a variable then it will take it as an argument and change copy of it
        b) For a given input it should always give the same output


    2. Higher order function -> they are function that takes a function as an input or return a function as
    an output. Example => map and filter

    **** Functions are first class citizens -> functions are treated as a variable
*/ 

let a = 10;
function pureFn(a) {
    a++;
    return a;
}
console.log(pureFn(a)); // 11
console.log(a); // 10