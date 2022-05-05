// ======_array declare_======
// let arr = [];

let array = [1, 2, 3, 4, 5];
console.log(array);
console.log(array.length); // length

// ======_traversal in array_======
for(let i = 0; i < array.length; i++) {
    console.log("Element at index " + i + " is " + array[i]);
}

// ======_PUSH_======
// Appends new elements to the end of an array, and returns the new length of the array.
array.push("last value"); 
console.log(array);

// ======_UNSHIFT_======
// Inserts new elements at the start of an array, and returns the new length of the array.
array.unshift("first value");
console.log(array);

// ======_SHIFT_======
// Removes the first element from an array and returns it. If the array is empty, 
// undefined is returned and the array is not modified.
array.shift();
console.log(array);

// ======_POP_======
// Removes the last element from an array and returns it. If the array is empty, 
// undefined is returned and the array is not modified.
array.pop();
console.log(array);

// ======_SLICE_======
// Returns a copy of a section of an array
// array.slice(starting index, ending index);
let sectionOfAnArray = array.slice(2, 4);
console.log(sectionOfAnArray);

// ======_SPLICE_======
// Removes elements from an array and, if necessary, 
// inserts new elements in their place, returning the deleted elements.
// array.splice(starting index, delete count);
array.splice(2, 3);
console.log(array);