// Event Emitter in HTTP module example

const http = require("http");

// using Event Emitter API
const server = http.createServer();

// emit request event
// subscribe to it / listen for it/ respond for it
server.on("request", (req, res) => {
  return res.end("Welcome");
});

server.listen(5000);
