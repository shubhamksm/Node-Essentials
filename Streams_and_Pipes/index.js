// Program to understand Streams in Node js.
// It will read input and log the output
// And it will write data into output.txt

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
