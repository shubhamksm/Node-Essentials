/*
  Module is a file that contains all the code related to a specific functionality.
  These files export functions for other modules to consume.
  The functions or variables defined in a module are not visible outside unless they are explicitly exported.
  It is always a good practice to physically separate the code based on functionality.
*/

// Exports
/*
  Use the keyword export to export certain variables from a module,

  ES6 Modules gives a fine grain control to import / export just what is required for a particular module.

  Example module that exports functions: common_methods.js

  function sum(a, b) {
      return a+b;
  }
  function difference(a, b) {
      return a-b;
  }
  export { sum, difference }  // separate methods using comma
  export { sum as add, difference as minus } // aliasing
*/

// Imports
/*
  Use import keyword to consume the exported variables in a different module.

  Example of a module that imports functions: app.js

  Importing all methods:
  import { sum, difference } from 'common_methods'  
  console.log(sum(2, 3));         // 5
  console.log(difference(5, 2));  // 3
  Importing only certain methods:
  import { sum } from 'common_methods' 
  Importing modules as objects
  import 'common_methods' as utils;
  console.log(utils.sum(2, 3));         // 5
  console.log(utils.difference(5, 2));  // 3
*/

// Default Exports
/*
  Default exports are one of the main ways to export modules. However, a file can have only one default export.

  var utils = {
      sum:  function(a, b) {
          return a+b;
      }
      difference:  function (a, b) {
          return a-b;
      }
  }
  export default utils;
  ** app.js**

  import utils from 'common_methods';
  console.log(utils.sum(2, 3));         // 5
  console.log(utils.difference(5, 2));  // 3
  export default utils;                           
  // Re-exports the imported module
*/
