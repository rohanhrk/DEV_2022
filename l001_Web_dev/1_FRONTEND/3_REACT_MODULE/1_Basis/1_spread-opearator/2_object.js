let obj1 = {
    name : "rohan",
    age : 23,
    address : {
        city : "guwahati",
        state : "assam",
        pin : "781036",
        Hno : "A/11"
    },
    a : {
        b : {
            name : "mintu"
        }
    },

    friends : ["ujjal", "uddipto", "hillo"],
}

// let obj2 = obj1;
// obj2.address.country = "India";

// // in both obj1 and obj2, country = "India" will be add
// // becouse Instance of object is created in heap 
// console.log(obj1);
// console.log(obj2);

// let obj2 = {...obj1};
// obj2.address.country = "India"; // address is object which is also created in heap
// console.log(obj1);
// console.log(obj2);

// =============================================
// Good solution
let obj2 = {...obj1, address : {...obj1.address}};
obj2.address.country = "India";
console.log(obj1);
console.log(obj2);

// =============================================
let obj3 = {...obj1, address : {...obj1.address}, a : {...obj1.a, b : {...obj1.a.b, name : {...obj1.a.b.name}}}};
obj3.address.country = "India";
obj3.a.b.name = "rahul";
console.log(obj1);
console.log(obj3);


