const fs = require("fs");
// console.log("before");
// fs.readFile("f1.txt", cb);
// function cb(err, data) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// }
// console.log("after");


// ================================================
console.log("before");
const file_read_promise = fs.promises.readFile("f1.txt");
console.log(file_read_promise); // initially promise is pending

// resolve
// fullfilled
file_read_promise.then(function (data) {
    console.log("" + data);
})

// rejected
file_read_promise.catch(function (err) {
    console.log(err);
})

console.log("after");