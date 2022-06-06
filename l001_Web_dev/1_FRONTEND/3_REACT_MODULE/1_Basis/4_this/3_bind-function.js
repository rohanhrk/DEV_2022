let obj = {
    name: "Rohan",
    /*
        arrow function( () => {})
        |-----> it does not have it's own "this"
                |-----> Wo outer function se "this" define karega
    */ 
    sayHi: function () {
        console.log(this.name, "say's Hi"); // this => outer function => window
        function subOuterFunction() {
            console.log(this.name, "say's Hi"); // this => outer function => window
        }
        let boundFunction = subOuterFunction.bind(obj);
        boundFunction();
    },
    inner : function() {
        console.log("fake");
    }
}               

obj.sayHi();
let fn = obj.sayHi;
fn();