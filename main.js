let options = [];
let randomElement = "";
const option = document.getElementById("option");
document.getElementById("array").innerHTML = options;

function add() {
  if (option.value) options.push(option.value);
  updateArray();
  clearInput();
}

function free() {
  if (options) options = [];
  updateArray();
  clearInput();
}

function removeFromOptions(option) {
  options.filter((e) => e !== option);
  updateArray();
}

function updateArray() {
  document.getElementById("array").innerHTML = options;
}

function clearInput() {
  option.value = "";
}

function sort() {
  randomElement = options[Math.floor(Math.random() * options.length)];
  updateSelected();
}

function updateSelected() {
  document.getElementById("selected").innerHTML = randomElement;
}

option.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    add();
  }
});
