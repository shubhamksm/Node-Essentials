function route(handle, pathname, res, reviewData) {
  console.log("Routing the request for ", pathname);
  if (typeof handle[pathname] === "function") {
    handle[pathname](res, reviewData);
  } else {
    console.log("No Handler for this particular pathname");
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Error! Page Not Found");
    res.end();
  }
}

exports.route = route;
