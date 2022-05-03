const { jago, kode } = require("./05_first_module");
const sayHi = require("./05_second_module");
const data = require("./05_alternative_syntax");

console.log(jago, kode);

sayHi(jago);
sayHi(kode);

console.log(data);
