// TDZ -> Temporal Dead Zone
/* 
 from line number 1 to line number 6 is called "Temoral dead zone" for letName,
 we can not be access letName at this line until letName variable has declared or initialized
*/ 
// console.log("6", letName); // ReferenceError: Cannot access 'letName' before initialization
let letName;
console.log("8", letName);
