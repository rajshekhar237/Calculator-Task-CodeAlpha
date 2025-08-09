const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

// Keyboard input support
document.addEventListener("keydown", function (e) {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === "c") {
    clearDisplay();
  }
});
