

//* Buttons Variables

// let num1 = Number(document.getElementById("number1").value);
// let num2 = Number(document.getElementById("number2").value);
// // Operators
// let add = document.getElementById("addition");
// let subtract = document.getElementById("subtraction");
// let multiply = document.getElementById("multiplication");
// let divide = document.getElementById("division");
// let decimal = document.getElementsByClassName("decimal");
// let clear = document.getElementsByClassName("all-clear");

// // Numbers
// let zero = document.getElementById("zero");
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");

//! ................................................................
// This object keeps track of the first operand, the operator,
// and the second operand.

const calculator = {
    // Holds string value based on user input and displays the values
  displayValue: '0',
  firstOperand: null,
  // This property will checks whether an expression can be evaluated
  secondOperand: false,
  operator: null,
};

// This function will always invoke anytime an operation is performed in the calculator.
function updateDisplay() {
  const display = document.querySelector('#calc-screen');
  // Utilizing the calculator object to grab/update the value of the display variable  
  display.value = calculator.displayValue;
}

// Call the function
updateDisplay();

//* key presses event handling
// Need to determin what type of key was clicked based on the event handler 
// listening for a click event on .calc-keys using event delegation
const keys = document.querySelector('#calc-keys');

// Adding 'click' event listener
keys.addEventListener('click', (event) => {

  // Extract the selection property of the click event using ES6 Object Destructuring
  const { selection } = event;

  // If the element that was clicked not a button, exit the function
  if (!selection.matches('button')) {
    return;
  }
});
//! ................................................................

//* Buttons Event Handlers

// Operators
// Addition
// add.addEventListener('click', function () {
//   document.getElementById('operator').value = '+';
// });
// // Subtract
// subtract.addEventListener('click', function () {
//   document.getElementById('operator').value = '-';
// });
// // Multiply
// multiply.addEventListener('click', function () {
//   document.getElementById('operator').value = '*';
// });
// // Divide
// divide.addEventListener('click', function () {
//   document.getElementById('operator').value = '/';
// });

// decimal.addEventListener('click', function () {
//   document.getElementById('number1').value = ' . ';
//   // document.getElementById('number2').value = '.';

// });

// ................................................................

// //* Calculation
// function calculations() {
//   // Inputs
//   let textType = Node.textContent ? 'textContent' : 'innerText';
//   let num1 = Number(document.getElementById("number1").value);
//   let num2 = Number(document.getElementById("number2").value);

//   // retrieves the result ID
//   result = document.getElementById('result');


//   switch (document.getElementById('operator').value.replace(/\s/g, '')) {
//     case '+':
//       result[textType] = num1 + num2;
//       break;
//     case '-':
//       result[textType] = num1 - num2;
//       break;
//     case '*':
//       result[textType] = num1 * num2;
//       break;
//     case '/':
//       result[textType] = num1 / num2;
//       break;
//     default:
//       result[textType] = 'Please use a valid Operator.';
//       break;
//   }
// }
