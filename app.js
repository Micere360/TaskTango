const yargs = require("yargs");
const getTasks = require("./intro.js");

yargs.version("1.1.0");

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

yargs.command({
  command: "Remove",
  describe: "Remove a task",
  handler: function (argv) {
    console.log("Removing a task", argv);
  },
});

yargs.command({
  command: "list",
  describe: "List all tasks",
  handler: function (argv) {
    console.log("Listing all tasks", argv);
  },
});

yargs.command({
  command: "read",
  describe: "Read a task",
  handler: function (argv) {
    console.log("Reading a task", argv);
  },
});

yargs.parse();

