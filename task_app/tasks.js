const fs = require("fs");

const getTasks = () => "your Tasks...";

const addTask = (title, body) => {
  const tasks = loadTasks();
  const isDuplicate = tasks.some((task) => task.title === title);

  if (!isDuplicate) {
    tasks.push({ title, body });
    saveTasks(tasks);
    console.log(tasks);
  } else {
    console.log("OPS!: Task Title Taken");
  }
};

const removeTask = (title) => {
  const tasks = loadTasks();
  const tasksToKeep = tasks.filter((task) => task.title !== title);

  if (tasks.length > tasksToKeep.length) {
    console.log("Task Removed Successfully!");
    saveTasks(tasksToKeep);
  } else {
    console.log("No task found");
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync("tasks.json", dataJSON);
};

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync("tasks.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const readTask = (title) => {
  const tasks = loadTasks();
  const selectedTask = tasks.find((task) => task.title === title);

  if (selectedTask) {
    console.log(selectedTask.body);
  } else {
    console.log("Task not found");
  }
};

module.exports = {
  getTasks,
  addTask,
  removeTask,
  readTask,
};

