// ======_How to print_======
console.log("Hello public");

// ======_declare variables_======
// JS ONLY TELLS YOU THAT IT IS A VARIABLE
// variable types : Primitive types: number , string,boolean ,null,symbol;
let a;
a = 10;
a = 10.1;
a = "hello I am a string";
a = 'Hello I am also a string';
a = null;
a = true;
console.log("varibale contains", a);

// ======_FOR LOOP_======
let number = 10;
for(let i = 1; i <= number; i++) {
    console.log("Number is ", i);
}

// ======_Is prime_======
// let num = 23;
let flag = true;
for(let div = 2; div < number; div++) {
    if(number % div == 0) {
        flag = false;
        break;
    }
}

if(flag == true)
    console.log(number, " is prime");
else
    console.log(number, " is not prime");