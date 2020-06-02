/*
  Promise is a design pattern that is useful in asynchronous programming.

  Promise in ES6 is an implementation of this pattern with functions (or methods) that return results asynchronously.

  A promise is in one of the following 3 states

  Pending
  Resolved
  Rejected
*/

// Creating a Promise
/*
  A Promise has two functions:

  resolve
  reject
  Creating a Promise

  var promise = new Promise( function (resolve, reject) { 
      if (condition) {
          resolve(value);   // success
      } else {
          reject(reason);   // failure
      }
  });
*/

// Consuming Promies
/*
  A Promise has then and catch methods, which are used when the promise is fullfilled or rejected

  Handling only resolve

  promise.then(
      function(value) { // resolve code }
  );
  Handling only reject

  promise.then(                                                            
      null, 
      function(reason) { // reject code }      
  );
              (OR)
  promise.catch(
      function(reason) { // reject code }      
  );
  Handling both reject and resolve

  promise.then(
      function (value) { // resolve code  },
      function (reason) { // reject code }
  ); 
*/

// Chaining
/*
  Chaining Promises then() always returns a Promise, which enables chaining of method calls:

  asyncFunc()
  .then(function (value1) {
      return 123;
  })
  .then(function (value2) {
      console.log(value2);    // 123
  });
  Chaining Errors: There can be one or more then() method calls that don’t provide an error handler. Then the error is passed on until there is an error handler.

  asyncFunc1()
  .then(asyncFunc2)
  .then(asyncFunc3)
  .catch(function (reason) {
      // Something went wrong in asyncFunc2 or asyncFunc3
  });
*/

// Promise.all
/*
  Promise.all can be used to trigger multiple asynchronous calls, at the same time and notify once all results come in.

  Syntax:

  Promise.all(promise1, promise2, ...)

  It returns array containing results of all promises when all are resolved. And a reject with the value, if any one of the promise gets rejected.

  Promise.all([firstAction(), secondAction()])
  .then(function() {
      finalAction();
  });
  finalAction() will be invoked only when firstAction() and secondAction() promises are resolved.
*/
