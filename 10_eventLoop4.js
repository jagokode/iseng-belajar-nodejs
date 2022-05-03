const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  return res.end("Welcome");
});

server.listen(5000, () => console.log("Server is running on port 5000"));
