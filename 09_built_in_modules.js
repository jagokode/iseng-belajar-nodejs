// os
const os = require("os");
const user = os.userInfo();
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log("Current user: ", user);
console.log("The system uptime is:", os.uptime(), "seconds");
console.log("Current OS", currentOS);

// path
const path = require("path");
console.log("Path separator:", path.sep);
const filePath = path.join("/content/", "subfolder", "text.txt");
console.log("File path:", filePath);
const base = path.basename(filePath);
console.log("Basename:", base);
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log("Absolute path:", absolute);

// fs sync
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`,
  // a: append text to existing text
  { flag: "a" }
);

// fs async
const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `The result is: ${first}. ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("success");
      }
    );
  });
});

// http
