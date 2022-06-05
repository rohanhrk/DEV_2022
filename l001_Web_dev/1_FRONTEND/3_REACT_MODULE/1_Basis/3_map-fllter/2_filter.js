let arr = [1, 2, 3, 4, 5, 6];

/*
    filter => Removes items which dont satisfy a condition
    i) Every element of the array is passed to the call back function
    ii) On each iteration, If callback function returns true, then the element will be added to the new array,
    otherwise it is not added to the new array
*/
let odd = arr.filter((value) => {
    return value % 2 == 1;
});
console.log(arr);
console.log(odd);