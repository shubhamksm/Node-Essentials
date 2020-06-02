/*
  Transpilingis a specific term for taking source code written in one language and transforming into another language.

  As not all browsers support all ES6 features, ES6 code is converted into ES5 so it can be read by all browsers.
*/

// Popular Transpiling Tools
/*
  Few of the popular transpiling tools are: Babel.js, Webpack, Closure and Traceur.

  In this course, we will be focusing on Babel. Babel offers better readibility and understandability of the ES5 code it generates, after transpiling and makes the work of any JavaScript developer easy.
*/

// Sample of how Transpiling works
/*
  Function to add any number of integer arguments Code in ES6:

    let additionResult=(...arr)=>{
        var sum=0;
        for(var i=0; i<arr.length; i++){
        sum+=arr[i];
        }
    }
  Code Transpiled by Babel into ES5:

    var additionResult = function additionResult() {
        for (var _len = arguments.length, 
            arr = Array(_len), _key = 0; 
            _key < _len; _key++) {
                arr[_key] = arguments[_key];
        }
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
    };
  Output of both these functions would be same. additionResult(1,2,7,5,6); // output: 21
*/

// Using Babel
/*
  Add below script code in <head> section of HTML page.
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.js"></script>
  //source: https://cdnjs.com/libraries/babel-core

  Rename "text/javascript" to "text/babel"
  <script type="text/babel">
  var nameBuilder = (firstName="Michael", lastName="Jackson") => {
    console.log(` ${firstname} ${lastName} `);
  }
  </script>
  This approach enables in-browser transformation without a need to install anything.
  However, it converts whole code into ES5 during runtime of project, which might make the application slow.
*/
