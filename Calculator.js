function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  const displayValue = document.getElementById('display').value;
  const result = evaluateExpression(displayValue);
  document.getElementById('display').value = result;
}

function evaluateExpression(expression) {
  try {
    return new Function('return ' + expression)();
  } catch (error) {
    return 'Error';
  }
}
