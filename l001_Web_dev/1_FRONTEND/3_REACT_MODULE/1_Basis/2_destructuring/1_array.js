let arr = ["Rohan", "Hazarika", "23", "Indian"];
// let name = arr[0];
// let lastName = arr[1];

// destructuring in array arr
// let [name, lastName, age, Nationality] = arr;
// console.log("name : ", name);
// console.log("lasrName : ", lastName);
// console.log("age : ", age);
// console.log("nationality : ", Nationality);

// default value
let [name = "rahul", lastName = "das", age, Nationality, mentor = "MAA", job = "IOCL"] = arr;
console.log("name : ", name);
console.log("lasrName : ", lastName);
console.log("age : ", age);
console.log("nationality : ", Nationality);
console.log(job);

