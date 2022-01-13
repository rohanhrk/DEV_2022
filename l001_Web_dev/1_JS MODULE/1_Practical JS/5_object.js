// object -> group of 'key : value' pair
// 'key : value' -> property
// 'key : function' -> mathod
let cap = {
    name : "Steve",
    lastName : "Rogers",
    address : {
        city : "Manhatten",
        state : "New York"
    } ,
    age : 35,
    isAvenger : true,
    movies : ["First Avegers", "winter soldiers", "civil war"],
    sayHi : function() {
        console.log("cap say's hi");
    }
};

// ======_GET_======
console.log(cap.name);
console.log(cap.age);
console.log(cap.movies[1]);
cap.sayHi();

console.log("cap :", cap); // BEFORE SET/UPDATE
// ======_SET/UPDATE_======
cap.age = 36;
cap.isAvenger = false;
cap.friends = ["Tony", "Bruce", "Peter"];
console.log("cap :", cap); // AFTER SET/UPDATE

// ======_DELETE_======
delete cap.address;
delete cap.lastName;
console.log("cap :", cap);

// ======_TRAVERSAL_======
for(let key in cap) {
    console.log(key + " : " + cap[key]);
}

let propKey = "age";
console.log(cap.age);
console.log(cap[propKey]);
console.log(cap["age"]);
console.log(cap.xyz);