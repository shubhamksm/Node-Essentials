// NPM
/*
Node Package Manager (NPM) provides two main functionalities:

Online repositories for node.js packages/modules which are searchable on search.nodejs.org
Command line utility to install Node.js packages, do version management and dependency management of Node.js packages.
NPM comes bundled with Node.js installables after v0.6.3 version. There is a simple syntax to install any Node.js module:

$ npm install <Module Name>
We can use npm ls command to list down all the locally installed modules.
*/

// NodeJs as a Single Thread
/*
For async processing, Node.js was done as an experiment. It is believed that better performance and scalability can be achieved by async processing on a single thread under typical web load than the typical thread based implementation.
*/

// Node.js over Java
/*
Node.js is quickly gaining attention as it is a loop-based server for JavaScript. Node.js gives user the ability to write the JavaScript on the server, which has access to things like HTTP stack, file I/O, TCP and databases.
*/

// // Global objects and timers
// console.log(__filename); // File name
// console.log(__dirname); // Current working directory

// // Function
// const printStuff = (pir) => {
//   console.log(pir);
// };

// //Global function setTimeout
// setTimeout(printStuff, 5000, "This is run with setTimeout");

// // Global function set Interval - Infinite loop with specified interval
// setInterval(printStuff, 2000, "This is run with setInterval");

// Code to process summation of command line input
const process = require("process");

const [, , ...args] = process.argv;
console.log(parseInt(args[0]) + parseInt(args[1]));

// Callback function
/*
Callback function is used in Node.js to deal with multiple requests made to the server. If a server takes a long time to read a large file and if you don’t want a server to get engaged in reading that large file while dealing with other requests, the call back function is used. The Call back function allows the server to deal with the pending requests first and call a function when it is completed.
*/

let sum = 0;
function multiples() {
  for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0 || (i % 3 === 0 && i % 5 === 0)) {
      sum = sum + i;
    }
  }
  return sum;
}

console.log(multiples());

const modules = require("./modules");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let counter = 0;
let data = [];
rl.on("line", (line) => {
  counter += 1;
  data.push(line);
  if (counter == 2) {
    rl.close();
  }
});

rl.on("close", () => {
  console.log(data[1], parseInt(data[1]));
  modules.addMul(parseInt(data[0]), parseInt(data[1]));
});
