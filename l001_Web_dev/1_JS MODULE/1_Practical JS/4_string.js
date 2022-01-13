// ======_define/assign_======
let singleQuotes = '  How are you?  ';
let doubleQuotes ="double quotes ki string";
console.log(singleQuotes);
console.log(doubleQuotes);

let char = singleQuotes.charAt(4);
console.log(char);
let ascii = singleQuotes.charCodeAt(4);
console.log(ascii);
let subStr = singleQuotes.substring(2, 8);
console.log(subStr);

// ======_TRIM_======
// Removes the leading and trailing white space
//  and line terminator characters from a string.
singleQuotes = singleQuotes.trim();
console.log(singleQuotes);

// ======_SPLIT_======
// Split a string into substrings using the specified separator 
// and return them as an array.
let arrStr = singleQuotes.split(" "); // split using space separator
console.log(arrStr);

// ======_JOIN_======
// Adds all the elements of an array into a string, 
// separated by the specified separator string.
let str = arrStr.join(" + ");
console.log(str);