const fs = require("fs");
/* ==========_Synchronous_========== */
// console.log("before"); 
// let data = fs.readFileSync("f1.txt");
// console.log("data : " + data);
// console.log("after");
// console.log("mean while");

/* ==========_Assynchronous_========== */
console.log("before");
fs.readFile("f1.txt", cb);
function cb(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log("data : " + data);
    }
}
console.log("after");
console.log("mean while");
