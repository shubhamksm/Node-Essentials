const fs = require("fs");
const queryString = require("querystring");

const htmlfile = fs.readFileSync("htmlFile.html");

function home(res) {
  console.log("Executing Home Handler");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(htmlfile);
  res.end();
}

function review(res, reviewData) {
  console.log("Executing review Handler");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Your Review is " + queryString.parse(reviewData).text);
  res.end();
}

exports.home = home;
exports.review = review;
