// Block Scope Variables
/*
Block is a group of zero or more statements delimited by a pair of curly brackets {}.
Block scope variables are the ones that exist only within the innermost block that surrounds them.
In JavaScript, var is used to create variables. ES6, introduces 2 other keywords for declaring Block scope variables.
let
const
*/

// Understanding Let
/*
let keyword in ES6 is used to create Block scope variables.

It works like var, but differs in few aspects.

Over next set of cards we will explore in detail about these differences.
*/

// Let vs Var
// 1
/*
let doesn't allow properties to be added to the global (window) object.

var x = 10;  
console.log(window.x)     // 10
let x = 10; 
console.log(window.x)    //  undefined
*/

//2
/*
let provides Block scope rather than function /global scope.

Using var:

function sum([array of args]) {
  // variable i is available here.
  for(var i = 0; i < [array of args].length; i++) {
        // some code
  }
  // variable i is also available here.
}
Using let:

function sum([array of args]) {
   // variable i is not available here.
   for(let i = 0; i < [array of args].length; i++) {
          // some code
    }
    // variable i is not available here too.
}
*/

// 3
/*
let doesn't allow re-declaring a variable

var x = 10;
var x = 11;  
console.log(x) // 11

let x = 10;
let x = 11; 
// Uncaught SyntaxError: Identifier 'x' has already been declared
*/

// Understanding Const
/*
const keyword is also used to declare Block Scope variables in ES6. These variables can not be changed once declared unlike let or var.

let x = 10;                                           
x = 20;
// console.log(x) => 20 

const x = 10;
x = 20;
//  Uncaught TypeError: Assignment to constant variable.
*/

// Freeze in Const
/*
Freeze
Const doesn't make objects immutable. To make object immutable, use the freeze() function.

const car = { name: 'Benz', class: 'c' }
car.class = 'e'   
console.log(car)   
//   { name: 'Benz', class: 'e' }
Using freeze()

const car = Object.freeze({ name: 'Benz', class: 'c' })
car.class = 's'
console.log(car)   
//   { name: 'Benz', class: 'c' }
*/
