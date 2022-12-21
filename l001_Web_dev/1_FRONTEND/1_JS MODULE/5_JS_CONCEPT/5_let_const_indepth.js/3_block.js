/*
    {} -> block
    let/const variable => a new "Execution Context" is created when a block start
*/

// =====================================================================================================================
let fruits = "apple";
console.log("6", fruits);
{
    /*fruits variable ka naya memory allocation hoga means hoisting*/
    // console.log("9", fruits); /*TDZ => ReferenceError: Cannot access 'fruits' before initialization*/ 
    let fruits;
    console.log("11", fruits);
    fruits = "orange";
    console.log("13", fruits);
}
console.log("15", fruits);

// =====================================================================================================================
/*
    when a variables is used in javasript, the javascript engine will try to find the variables value in the
    current block scope. If it could not find the variable, it will look into the outer scope and will continue to 
    do so until it finds the variable or reaches global scope.
*/ 


let cars = "farari";
console.log("27", cars);
{
    /*cars variable ka naya memory allocation hoga means hoisting*/
    // console.log("30", cars); /*TDZ => ReferenceError: Cannot access 'cars' before initialization*/ 
    let cars;
    console.log("32", cars);
    cars = "marcedeze";
    {
        console.log("35", cars);
    }
    console.log("37", cars);
}
console.log("39", cars);

// =====================================================================================================================
/*
    variable shadowing ===> it is when a variable in a local scope uses its value instead of a variable in a 
    parent scope. So the local variables value is shadowing over parents.
    
    1. legal variable shadowing
    2. ellegal variable shadowing
*/ 

// <================_legal_================>
/*
    i) if we declare with variable "let/const" type in outer_most block scope or in global area,
    then we can not declare variable with "var" type inside in it. 
    
    ii) but if we declare variable with var in outermost block scope or global area, then
    we can declare variable with var type inside in it. 

    so if we fllow the above, then it is a legal variable shadowing

    example (i) ====>
    let a;
    or const a;
    {
        let a; ✔valid
        const a; ✔valid
        var a; ❌invalid
        
    }

    example (ii) ====>
    var a;
    {
        let a; ✔valid
        const a; ✔valid
        var a; ✔valid
    }
*/   
var name = "rohan";
console.log(name);
{
    // console.log(name); // TDZ
    let name = "rahul"; // valid only for let/const
    console.log(name);
} 

// <================_illegal_================>
// let run = 1;
// console.log(run);
// {
//     var run = 2;  // illegal shadowing because var is functional scopped not block scopped
//     console.log(run);
// }
