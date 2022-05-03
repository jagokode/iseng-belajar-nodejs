const { readFile, writeFile } = require("fs").promises;

const mulai = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/fs-promises.txt",
      `fs-promises: ${first}. ${second}`
    );
  } catch (error) {
    console.log(error);
  }
};

mulai();
