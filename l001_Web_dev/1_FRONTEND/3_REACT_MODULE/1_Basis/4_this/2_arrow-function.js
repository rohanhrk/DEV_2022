let obj = {
    name: "Rohan",
    /*
        arrow function( () => {})
        |-----> it does not have it's own "this"
                |-----> Wo outer function se "this" define karega
    */ 
    sayHi: () => {
        console.log(this.name, "say's Hi"); // this => outer function => window
        const subOuterFunction = () => {
            console.log(this.name, "say's Hi"); // this => outer function => window
        }
        subOuterFunction();
    },
    inner : function() {
        console.log("fake");
    }
}               

obj.sayHi();
let fn = obj.sayHi;
fn();