let options = [];
const option = document.getElementById("option");
document.getElementById("array").innerHTML = options;
document.getElementById("butao").disabled = !option.value;

function addToOptions() {
  if (option.value) options.push(option.value);
  clearInput();
  enableButao();
  updateArray();
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

function enableButao() {
  document.getElementById("butao").disabled = !option.value;
}
