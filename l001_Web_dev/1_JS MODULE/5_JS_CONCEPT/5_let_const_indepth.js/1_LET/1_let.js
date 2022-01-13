// declaration
let letName; // default => undefined
console.log("letName on line number 3", letName);

// assign
letName = 10;
console.log("7", letName);

// 1. let variables can reassigning
letName = 20;
console.log("11", letName);

// 2. let variables can not redeclaration
/*let letName;*/ /* give error during memory allocation(hoisting) 
            and doesn't execute single line of code 
            ===> SyntaxError: Identifier 'letName' has already been declared */


