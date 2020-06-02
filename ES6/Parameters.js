// Parameters and Arguments

/*
    Parameters (or formal parameters) are given in the function declaration, whereas Arguments (or actual parameters) are passed to the function.

    Example:

    function foo(a,b) { 
          //do something 
    }
    foo (10,20);
    In this function, a and b are parameters, while 10 and 20 are the arguments.

    ES6 offers 3 types of parameters and we will learn about them in this module.
*/

// Default Paramertes

/*
    Default parameters are the parameters with an initialised value.

    Invoking a function without passing any arguments, would assume default values and process the request.

    Example in JavaScript

    function foo(a, b) {
        console.log(a, b);
    }        
    foo();           // undefined undefined
    foo(5, 10)  // 5 10
    Example in ES6:

    function foo(a = 10, b = 20) {
        console.log(a, b);
    }
    foo();            // 10 20
    foo(5, 10);  // 5 10
*/

// Rest Parameter
/*
    Rest allows indefinite number of parameters in one single array. Notation ...<paramname> is used to define Rest Parameter.

    Example in JavaScript

    function sum() {
        var args = Array.prototype.slice.call(arguments);  
        // converts args to array
        result = 0;
        numbers.forEach(function (args) { 
                    result += args;
        } );
        return result;
    }
    Example in ES6

    //args is rest parameter
    function sum(...args) {
        var result = 0;
        args.forEach(function(args) { result += args; } )
        return result;
    }
    let [x,y,z] = [1, 2, 3];
    let add = sum(x, y, z);
    console.log(add);  // output: 6
*/

// Spread Parameter
/*
    Spread Operator ( ...) is used to spread an array elements into parameters.

    Usage in code: ...array_variable_name

    Example in Javascript

    function sum(x, y, z) {
    return x+y+z;
    }
    let args = [1, 2, 3];
    let add = sum.apply(null, args); 
    console.log(add);
    Example in ES6

    function sum(x, y, z) {
    return x+y+z;
    }
    let args = [1, 2, 3];
    let add = sum(...args);
    console.log(add);  
*/

// More use of Spread operator
/*
    Spread Operator can be used for

    Concatenation of arrays
    var parts = ["shoulder", "knees"];
    var bodyParts = ["head", ...parts, "and", "toes"]; 
    console.log(bodyParts)
    Output : ["head","shoulder","knees","and","toes"]

    Math Functions
        let numbers = [9, 4, 7, 1];
        console.log(Math.max(...numbers));
    Output : 9

    Destructuring arrays and objects.
    let [x, y, ...z] = [1,2,3,4,5,6];           
    would mean x = 1, y = 2, z = [3,4,5,6]
    let {x, y, ...z} = {x: 1, y: 2, z: 3, a: 4};    
    would mean x = 1, y = 2, z = { z: 3, a: 4 }   
*/
