// Buttons
let add = document.getElementById("addition");
let subtract = document.getElementById("subtraction");
let multiply = document.getElementById("multiplication");
let divide = document.getElementById("division");

// When user clicks on the button of any of the four operators,
// display the operator value to the input element. 

// Addition
add.addEventListener('click', function () {
  document.getElementById('operator').value = '+';
});
// Subtract
subtract.addEventListener('click', function () {
  document.getElementById('operator').value = '-';
});
// Multiply
multiply.addEventListener('click', function () {
  document.getElementById('operator').value = '*';
});
// Divide
divide.addEventListener('click', function () {
  document.getElementById('operator').value = '/';
});

//* Numbers
//! Add numbers button to display in the operator input element when clicked on any numbers

// ................................................................

function calculations() {
  // Inputs
  let textType = Node.textContent ? 'textContent' : 'innerText';
  let num1 = Number(document.getElementById("number1").value);
  let num2 = Number(document.getElementById("number2").value);

  // retrieves the result ID
  result = document.getElementById('result');


  switch (document.getElementById('operator').value.replace(/\s/g, '')) {
    case '+':
      result[textType] = num1 + num2;
      break;
    case '-':
      result[textType] = num1 - num2;
      break;
    case '*':
      result[textType] = num1 * num2;
      break;
    case '/':
      result[textType] = num1 / num2;
      break;
    default:
      result[textType] = 'Please select a valid Operand.';
      break;
  }
}
