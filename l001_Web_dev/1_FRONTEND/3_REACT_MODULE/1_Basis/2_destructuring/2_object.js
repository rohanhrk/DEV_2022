let obj = {
    name : "Rohan",
    country : "India",
    age : 21
}

// let {name, country, age} = obj;
// console.log(name, country, age);

// Nested Object
const user = {
    id : 339,
    name: 'Fred',
    age: 42,
    education: {
        degree: 'Masters',
        school: {
            name: 'SPS',
            location: 'Pitampura'
        }
    }
}

// get degree from user object
let {education : {degree}} = user; // first get education object -> get degree inside the education object
console.log(degree);

// get name
let {education : {school : {name}}} = user;
console.log(name);