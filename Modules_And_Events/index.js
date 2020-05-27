// System modules are
const fs = require("fs");
const http = require("http");

// Events in NodeJs
/*
If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

On the backend side, Node.js offers us the option to build a similar system using the events module.

This module, in particular, offers the EventEmitter class, which we'll use to handle our events.

You initialize that using
*/
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("Event is started");
});

eventEmitter.emit("start");

/*
The EventEmitter object also exposes several other methods to interact with events, like

once(): add a one-time listener
removeListener() / off(): remove an event listener from an event
removeAllListeners(): remove all listeners for an event
You can read all their details on the events module page at https://nodejs.org/api/events.html
*/
