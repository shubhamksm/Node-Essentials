// Program to server Index.html on specified server with node Js

const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("index.html");
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(index);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
