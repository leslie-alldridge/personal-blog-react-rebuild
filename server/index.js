const server = require("./server");

server.listen(process.env.PORT || 3000, function() {
  console.log("Server started.......");
});
