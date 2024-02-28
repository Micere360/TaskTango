const { demandOption } = require("yargs");
const yargs = require("yargs");
const tasks = require("./tasks.js");

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
  handler(argv) {
    tasks.addTask(argv.title, argv.body);
  },
});

// remove yargs command

yargs.command({
  command: "remove",
  describe: "Remove a task",
  builder: {
    title: { describe: "Task Title", demandOption: true, type: "string" },
  },
  handler(argv) {
    tasks.removeTask(argv.title);
  },
});

// create yargs list command
yargs.command({
  command: "list",
  describe: "List all tasks",
  handler(argv) {
    console.log("Listing all tasks", argv);
  },
});

// create yargs read command
yargs.command({
  command: "read",
  describe: "Read a task",
  builder: { title: "Reading task", demandOption: true, type: "string" },
  handler(argv) {
    console.log("Reading a task", argv.title);
    tasks.readTasks(argv.title);
  },
});

// console.log(yargs.argv);
yargs.parse(); // parse is used to parse the command line arguments
