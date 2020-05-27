// Program to create custom event and bind a custom function to it and print out the message

const MyEvent = require("events");

emitter = MyEvent.EventEmitter;

function Myfunc() {
  let e = new emitter();

  e.on("start", () => {
    console.log("HI THERE ! HAPPY LEARNING");
  });

  e.emit("start");
}

Myfunc();
