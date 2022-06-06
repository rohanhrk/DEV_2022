// Class always work in strict mode
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(this);
        console.log(`His Name is ${this.name} ans age is ${this.age}`);
    }

    setDetails(newName, newAge) {
        this.name = newName;
        this.age = newAge;
    }
}


let Binod = new Person("Binod", 23);
Binod.getDetails();
Binod.setDetails("Rohan", 22);
Binod.getDetails();

let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");

// for eventListener -> "this" would be html object
btn1.addEventListener("click", Binod.getDetails); // <button class="btn-1">click btn-1</button>
btn2.addEventListener("click", Binod.getDetails); // <button class="btn-2">click btn-2</button>

// for all async function -> "this" would be windows object
setTimeout(Binod.getDetails, 1000);

// function call -> "this" would be undefined 
let fn = Binod.getDetails;
fn();

/*
    ## Remember =>
    i. all async function =>
       this -> windows object
    
    ii.normal function call =>
        this -> Undefined

    iii. event listener
        this -> HTML object
*/ 


