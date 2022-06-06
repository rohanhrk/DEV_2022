let obj = {
    name: "Rohan",
    // fuction of an object are known as methods
    sayHi: function() {
        console.log(this.name, "say's Hi");
        function inner() {
            console.log(this.name, "say's Hi");
        }
        this.inner();
        inner();
    },
    inner : function() {
        console.log("fake");
    }
}

/*
    this keyword -> define on the basis of call
        a) method call(obj.fn()) -> 
            this = current object
        b) fundtion call ( fn() )
            this = window
*/ 

obj.sayHi();
let fn = obj.sayHi;
fn();