const fs = require("fs");

const WritableStream = fs.createWriteStream("data_output.txt");

let data = "Shubham Khandelwal";

for (let i = 0; i < 10 ** 5; i++) {
  WritableStream.write(data, "UTF8");
}

WritableStream.end();

WritableStream.on("finish", () => {
  console.log("Finish");
});
