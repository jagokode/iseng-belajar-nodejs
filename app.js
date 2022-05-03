console.log("stream example");

const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync("./content/big.txt", "utf-8");
    // return res.end(text);
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      return res.end(err);
    });
  })
  .listen(5000);
