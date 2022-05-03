const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

getText("./content/first.txt")
  .then((text) => console.log(text))
  .catch((err) => console.log(err));
