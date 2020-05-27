// Program to create folde and files and writing data into them using built in file systems module fs

const fs = require("fs");

fs.mkdir("Node_folder", (err) => {
  if (err) throw err;
  console.log("Successfully created folder");
});
fs.writeFile(
  "./Node_folder/sample.txt",
  "This is the new file created !!!",
  (err) => {
    if (err) throw err;
    console.log("Successfully created file");
  }
);
