const yargs = require("yargs");
const getTasks = require("./intro.js");

// console.log(process.argv)
// console.log(yargs.argv);

// customize yargs version
yargs.version("1.1.0");

//create yargs add command
yargs.command({
  command: "add",
  describe: "Add a task",
  builder: {
    title: { describe: "Task Title", demandOption: true, type: "string" },
    body: { describe: "Task Body", demandOption: true, type: "string" },
  },
  handler: function (argv) {
    console.log("Adding a new task!", argv.title);
    console.log("Task body:", argv.body);
  },
});

// remove yargs command

yargs.command({
  command: "Remove",
  describe: "Remove a task",
  handler: function (argv) {
    console.log("Removing a task", argv);
  },
});

// create yargs list command
yargs.command({
  command: "list",
  describe: "List all tasks",
  handler: function (argv) {
    console.log("Listing all tasks", argv);
  },
});

// create yargs read command
yargs.command({
  command: "read",
  describe: "Read a task",
  handler: function (argv) {
    console.log("Reading a task", argv);
  },
});

// console.log(yargs.argv);
yargs.parse(); // parse is used to parse the command line arguments
