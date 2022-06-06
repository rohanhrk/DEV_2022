## REMEMBER =>
1. this is everytime defined on the basis of the call
2. Normal Function =>
    |----> i. Method Function -> this = current object
    |----> ii. Function call -> this = window object

3. Arrow Function
    |----> Second rule is not applicable for arrow function
    |----> It does not have it's own "this" -> it will take it from outside the function

4. bind function

    ## syntax => 
        let boundFunction = subOuterFunction.bind(obj);
                            -------------------------
                                    |----> set "this" keyword from obj
                                    |----> jo "obj" ka "this" hoga, wohi subOuterFunction ka bhi hoga