let arr1 = [1, 2, 3];

// arr2 = arr1;
// arr2.push(4);
// array created in heap
// so if I make any changes to arr2 which store address of arr1, also changes show in it's self 
// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]

// Solution to avoid changes we use spread operator
// syntax => ...arr ///// (triple dot)arr
let arr2 = [...arr1];
arr2.push(4);
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]

