const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const start = async () => {
  try {
    const file = await getText("./content/first.txt");
    const text = await getText("./content/second.txt");
    console.log(file, text);
  } catch (error) {
    console.log(error);
  }
};

start();
