// on : listen for an event
// emit : emit an event

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received: ${name} - ${id}`);
});
customEmitter.on("response", () => {
  console.log(`some other logic`);
});

customEmitter.emit("response", "jagokode", 7);
