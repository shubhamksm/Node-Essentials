let http = require("http");
let url = require("url");

function startserver(route, handle) {
  function onRequest(req, res) {
    let reviewData = "";
    let pathname = url.parse(req.url).pathname;
    console.log("Request Recieved for : ", pathname);

    req.setEncoding("utf8");

    req.addListener("data", (chunk) => {
      reviewData += chunk;
    });

    req.addListener("end", () => {
      route(handle, pathname, res, reviewData);
    });
  }

  http.createServer(onRequest).listen(8888);

  console.log("Service Started at 8888");
}

exports.startserver = startserver;
