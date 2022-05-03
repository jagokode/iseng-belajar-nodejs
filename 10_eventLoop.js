const { readFile } = require("fs");

console.log("Start first task");

// check file path
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Finish first task");
});

console.log("Start next taskt");
