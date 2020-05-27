// REPL
/*
REPL stands for Read Eval Print Loop and it represents a computer environment like a Windows console or Unix/Linux shell where a command is entered and the system responds with an output in an interactive mode.

Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
Eval − Takes and evaluates the data structure.
Print − Prints the result.
Loop − Loops the above command until the user presses ctrl-c twice
*/

// REPL Commands
/*
Ctrl + c − terminate the current command.
Ctrl + c twice − terminate the Node REPL.
Ctrl + d − terminate the Node REPL.
Up/Down Keys − see command history and modify previous commands.
Tab Keys − list of current commands.
.help − list of all commands.
.break − exit from multiline expression.
.clear − exit from multiline expression.
.save filename − save the current Node REPL session to a file.
.load filename − load file content in current Node REPL session.
*/

// below code is a starter code to run the server with http module and put the response
const http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write("Hello World...");
    setTimeout(function () {
      response.write("Event is Done!!!");
      response.end();
    }, 5000);
  })
  .listen(8080);
