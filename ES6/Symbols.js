/*
  Symbols are new unique, immutable, primitive data type just like Number, String, and Boolean. They were originally meant to provide private properties.

  Symbol() function can be used to create symbols.
  const mySymbol = Symbol(); 
  Symbol can not be instantiated using new keyword.
  var sym = new Symbol(); // TypeError
  Each time the Symbol() function is called, a new unique symbol is returned.
  let symbol1 = Symbol();
  let symbol2 = Symbol();   
  console.log( symbol1 === symbol2 );  //false   

*/

// Global Scope Symbols
/*
  Symbol() function will not create a global symbol that is available in the whole codebase.

  To create global scope Symbols, use following methods.

  'Symbol.for()'
      
      Symbol.for(key) method searches for existing symbols with the given key and returns it, if found. Otherwise, it creates a new symbol in the global symbol registry with this key and then returns the symbol.

      Symbol.for('bar') === Symbol.for('bar'); 
      // true, both are same

      Symbol('bar') === Symbol('bar');  
      // false, as Symbol() creates new Symbol each time it is called

  'Symbol.keyFor()'

      Symbol.keyFor(key) method is essentially opposite of Symbol.for(key).

      Instead of passing a key to get a symbol, pass a symbol to get a key.

      var sym1 = Symbol("desc");    
      // Local symbol      
      var sym2 = Symbol.for("desc");   
      // Global symbol  
          
      console.log(Symbol.keyFor(sym1));   
      // undefined  
      console.log(Symbol.keyFor(sym2));   
      // desc

  These methods can be used to set and retrieve symbols from the global symbol registry.
*/

// Symbols as Object Keys
/*
  Symbols can be used as object keys to have (semi) private properties in JavaScript.

  // Defining symbol 
  let email = Symbol(); 
  // Defining object "user"
  let user = {      
      name:"praveen", 
      age : 30, 
  //Symbol as key in array 
      [email] : "praveen@gmail.com" 
  };  
  Symbols are visible if accessed directly:

  console.log(user[email]);  
  // praveen@gmail.com

  Accessing Object Symbols
      Iterating Object.keys() and Object.getOwnPropertyNames(), using for loop or methods, would list just the name and age.

      Email will not be displayed as it is private.

      for (var i in user) { console.log(i);}
      Object.keys(user); 
      Object.getOwnPropertyNames(user); //Output:["name","age" ]

    Symbols in Objects can be accessed via Object.getOwnPropertySymbols or Reflect.ownKeys, thus making them public for all to see.

      Object.getOwnPropertySymbols() returns an array of symbol-based keys

      Object.getOwnPropertySymbols(user);  
      //Output:  [ Symbol() ]
      Reflect.ownKeys() will return an array of all keys & symbols.

      Reflect.ownKeys(user)    
      //Output: [ "name", "age", Symbol() ]
*/
