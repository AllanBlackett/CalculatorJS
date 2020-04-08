//* Buttons Variables
// Operators
let add = document.getElementById("addition");
let subtract = document.getElementById("subtraction");
let multiply = document.getElementById("multiplication");
let divide = document.getElementById("division");

// Numbers
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

//* Buttons Event Handlers


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
      result[textType] = 'Please use a valid Operator.';
      break;
  }
}
