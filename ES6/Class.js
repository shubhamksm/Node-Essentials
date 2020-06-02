/*
  Class is just syntactical sugar over JavaScript prototype based inheritance.

  ES6 classes provide simple and clear syntax for creating objects and deal with inheritance.

  Class Definition Includes:
  Class Declaration:
  class ArithmeticOperations {
      constructor(x, y){
          this.x = x;
          this.y = y;
      }
      multiply() {
          return this.x * this.y;
      }
  }                                               
  Class Expression:
  let ArithmeticOperations = class {
      // same as class definition above
  }


  Ex2
  
  class Car {
  constructor(name, distance){
    this.name = name;
    this.distance = distance;
  }
  carDistance() {
    return `${this.name} had travelled for ${this.distance} miles`;
  }
}
let Car1 = new Car('Audi', 100);
const msg = Car1.carDistance();
console.log(msg); //this statement should print the message---Audi had travelled for 100 miles
module.exports = {msg}

*/

// Types of Methods
/*
  Constructor: is a special method for initializing and creating objects with a class. A class can have at the most one constructor.

  Static Methods: are method on constructor function itself. They can be created using static keyword. They cannot be invoked using instances.

  Example:

  class Food {
    static describe () {
      console.log("Food is a data type for storing macronutrient information.");
    }
  }
  Food.describe();  
  Prototype Methods: are any methods which are not constructor or static method.
*/

// Inheritance Subclassing
/*
  extends keyword can be used to make a class a subclass(child) of another class.

  class Addition extends ArithmeticOperations {
      sum() {
          return this.x + this.y;
      }
  }
  let operation = new Addition(2, 3);
  operation.sum();      // 5
  operation.multiply()  //  6
*/

// Inheritance SuperClass
/*
  Parent class methods can be invoked using super keyword.

  class DoubleAdd extends Addition {
      doubleAdd() {
          return 2 * super.sum();
      }
  }
  var x = new DoubleAdd(2, 3);
  x.doubleAdd();      //  10
*/
