// Program to understand Streams in Node js.
// It will read input and log the output
// And it will write data into output.txt

// Theory
/*
Types of streams
There are four types of streams:

Readable - For read operation
Writable - For write operation
Duplex - For both read and write operation
Transform - When the output is computed based on the input
*/

const fs = require("fs");

const ReadableStream = fs.createReadStream("input.txt");
const writableStream = fs.createWriteStream("output.txt");

let data = "";
let writeData = "Hello World !";

ReadableStream.setEncoding("UTF8");

ReadableStream.on("data", (chunk) => {
  data += chunk;
  // console.log(chunk);
});

ReadableStream.on("end", () => {
  console.log(data);
});

writableStream.write(writeData, "UTF8");
writableStream.end();
writableStream.on("finish", () => {
  console.log("write Completed !!!!!");
});

// Piping in Node Js
/*
Piping is a mechanism to connect output of one stream to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream. There is no limit on piping operations.
*/

// Chaining in Node Js
/*
Chaining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.
*/
