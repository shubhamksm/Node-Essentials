/*
  Generators are also functions. However, unlike functions, we can pause the execution and later resume the code execution using a generator function.

  Generators also allow us to turn asynchronous code into synchronous-looking code.

  Syntax:
  function* name(params) { }
  function *name(params) { }
  function*name(params) { }
*/

// Creating a Generator Function
/*
  function *foo() {
          yield 'hi';
          yield 'dude';
  }
  let iterator = foo();
  iterator.next(); //Object {value: "hi", done: false}
  iterator.next(); //Object {value: "dude", done: false}
  iterator.next(); //Object {value: undefined, done: true}
  Calling a generator function does not execute its body immediately. An iterator object for the function is returned instead.
  Calling next() on iterator object will execute the code till it finds the first yield expression and pauses it.
  Calling next() again on iterator object will execute untill the next yield expression and pauses again.
*/

// Yield Multiples Values
/*
  yield* can be used to recursively iterate over an iterable.

  function *foo() {
      yield* ['hi', 'hello'];        
  }

  let iterator = foo()
  iterator.next();  // Object {value: "hi", done: false}
  iterator.next();  // Object {value: "hello", done: false}
  iterator.next();  // Object {value: undefined, done: true}
*/

// Return in  Generators
/*
  function *foo() {
      yield 'hi';
      yield 'dude';
      return "bye";
  }

  let iterator = foo();
  iterator.next();  // Object {value: "hi", done: false}
  iterator.next();  // Object {value: "dude", done: false}
  iterator.next();  // Object {value: "bye", done: true}
  iterator.next();  // Object {value: undefined, done: true}
*/

// Yielding other Generators
/*
  Not only primitives, we can also yield other generator functions. Example:

  function *foo() {
      yield* ['hi', 'hello'];        
  }
  function *bar() {
      yield* foo();
      yield "bye";        
  }
  let iterator = bar()
  iterator.next();  // Object {value: "hi", done: false}
  iterator.next();  // Object {value: "hello", done: false}
  iterator.next();  // Object {value: "bye", done: false}
  iterator.next();  // Object {value: undefined, done: true}
*/

// Generators with Arguments
/*
  function* person() {
      let age = yield 'Age please';
      console.log(age);                                                    
      let location = yield 'Your age is ' + age + 'Your location please....';
      console.log(location);                                                        return location;                                                          }
  let iterator = person();
  iterator.next();    
  // Object {value: "Age please", done: false}
  iterator.next(10);  
  // Object {value: "Your age is 10 
  //              Your location please....", done: false}
  iterator.next('LA') 
  //   Object {value: "LA", done: true}
*/
