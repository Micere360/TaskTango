const fs = require("node:fs");

fs.writeFileSync("hello.txt", "Addah: 'How are you?'");
fs.appendFileSync("hello.txt", "Brenda: 'I am fine too and you?'");

const note = function () {
  return "Your Task is doing fine...";
};

module.exports = intro;
