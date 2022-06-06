// Question 1 :
message = "fake Hello";
const object = {
    message: 'Hello, World!',
    logMessage: function() {
        console.log(this.message); // question => What is logged???
    }
}
// this -> define during the runtime 
setTimeout(object.logMessage, 1000); // this -> window
/*
    output => fake Hello
*/

// CORRECTION =========>

// Method 1 => 
message = "fake Hello";
const object1 = {
    message: 'Hello, World!',
    logMessage: function() {
        console.log(this.message); // question => What is logged???
    }
}
// this -> define during the runtime 
setTimeout(function() {
    object1.logMessage(); // this -> current object, object1
}, 1000); 

// Method 2 => 
let boundFn = object1.logMessage.bind(object1); 
setTimeout(boundFn, 1000); 