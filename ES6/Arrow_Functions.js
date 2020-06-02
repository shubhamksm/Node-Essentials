/*
  Arrow functions in ES6 are the modified and abbreviated syntax of JavaScript functions.

  These functions make use of => token and hence known as Fat Arrow functions.

  Also, Arrow functions are less verbose than the traditional function expressions.
*/

// Function Definition
/*
  JavaScript functions with multiple, single and no parameters

  var add = function(x, y) { return x+y; }
  var square = function(x) { return x*x;}
  function sub() => { return expression; } 
  ES6 Equivalent

  var add = (x, y) => { return x+y; }
  var square = (x) => { return x*x; }
      OR
  var square = x => { return x*x; } 
  //Parantheses are optional for single parameter 
  var sub  = () => expression 
  //return and {} are optional for function with single statement
*/

// Function Expressions
/*
  Arrow functions can also be used as function expressions to return object literals. The function body should be wrapped in parantheses () to achieve this.

  Example in JavaScript

  var bio = function(name, age, country) {
      return {name: name, age: age, country: country};              
  };
  Example in ES6

  var bio = (name, age, country) => ({name: name, age: age, country: country}) 
*/
