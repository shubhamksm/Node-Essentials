let http = require("http");
let url = require("url");

let handle = {};
handle["/hi"] = hi;
handle["/hello"] = hello;

function hi(res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hi Welcome");
  res.end();
}

function hello(res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello Buddy");
  res.end();
}

function route(handle, pathname, res) {
  if (typeof handle[pathname] === "function") {
    handle[pathname](res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("File not found error");
    res.end();
  }
}

function onRequest(req, res) {
  let pathname = url.parse(req.url).pathname;

  route(handle, pathname, res);
}

http.createServer(onRequest).listen(8000);
