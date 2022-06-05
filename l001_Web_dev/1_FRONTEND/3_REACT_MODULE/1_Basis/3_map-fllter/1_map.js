let arr = [1, 2, 3, 4];

/*
    map => calls it's call back function on every element of the array and make
    a new array that has valued that returned  by the cb function 
*/ 
let squareArr = arr.map((value) => {
    return value * 2;
})
console.log(arr);
console.log(squareArr);